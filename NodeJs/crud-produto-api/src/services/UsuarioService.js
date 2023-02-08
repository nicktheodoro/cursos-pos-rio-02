const Usuario = require("../models/UsuarioModel");
const { NaoAutorizadoError, ModeloInvalidoError, AplicacaoError } = require("../errors/typeError");

const geradorToken = require("../utils/GeradorToken");
const usuarioCache = require("../cache/UsuarioCache");

async function validarUsuario(email, senha) {
  email = email.toString().toLowerCase();

  const usuario = await Usuario.findOne({ where: { email } });

  senha = geradorToken.gerarHashDaSenha(senha);

  if (!usuario || (usuario.senha !== senha)) {
    throw new NaoAutorizadoError(401, "Usuário ou senha inválidos.")
  }

  return _criarCredencial(usuario);
}

async function logout(token) {
  usuarioCache.removerDoCache(token);
}

async function cadastrar(usuarioDTO) {
  usuarioDTO.senha = geradorToken.gerarHashDaSenha(usuarioDTO.senha);

  const { email } = usuarioDTO;

  if (await Usuario.findOne({ where: { email } })) {
    throw new ModeloInvalidoError(400, "E-mail já cadastrado, tente outro por favor.")
  }

  const usuario = await Usuario.create(usuarioDTO);

  if(!usuario) {
    throw new AplicacaoError(500, "Falha ao cadastrar o usuário.")
  }

  usuario.senha = undefined;

  return usuario;
}

function _criarCredencial(usuario) {
  const dataExpiracao = geradorToken.gerarDataExpiracao();

  let credencial = usuarioCache.obterCredencialPorUsuario(usuario);

  if (credencial) {
    if (credencial.dataExpiracao < new Date()) {
      usuarioCache.removerDoCache(credencial.token);
    } else {
      usuarioCache.atualizarDataExpiracao(credencial.token, dataExpiracao);

      return credencial;
    }
  }

  const token = geradorToken.criarToken(usuario);
  usuario.senha = undefined;

  credencial = { token, usuario, dataExpiracao };

  usuarioCache.adicionarNoCache(credencial);

  return credencial;
}

module.exports = {
  validarUsuario,
  logout,
  cadastrar
}