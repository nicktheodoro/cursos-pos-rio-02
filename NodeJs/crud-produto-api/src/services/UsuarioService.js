const Usuario = require("../models/UsuarioModel");
const { NaoAutorizadoError } = require("../errors/typeError");
const geradorToken = require("../utils/GeradorToken");

async function validarUsuario(email, senha) {
  email = email.toString().toLowerCase();

  const usuario = await Usuario.findOne({ where: { email } });

  senha = geradorToken.gerarHashDaSenha(senha);

  if (!usuario || (usuario.senha !== senha)) {
    throw new NaoAutorizadoError(401, "Usuário ou senha inválidos.")
  }

  return _criarCredencial(usuario);
}

function _criarCredencial(usuario) {
  const token = geradorToken.criarToken(usuario);
  usuario.senha = undefined;

  const credencial = { token, usuario };

  return credencial;
}

module.exports = {
  validarUsuario
}