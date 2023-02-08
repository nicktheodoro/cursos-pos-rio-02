const usuarioService = require('../services/UsuarioService');
const { NaoAutorizadoError } = require("../errors/typeError");
const UsuarioDTO = require("../dtos/UsuarioDTO");

class UsuarioController {
  async login(req, res) {
    const { email, senha } = req.body;

    try {
      if (!email || !senha) {
        throw new NaoAutorizadoError(401, "Usuário ou senha inválidas.")
      }

      const credencial = await usuarioService.validarUsuario(email, senha);

      return res.json(credencial);
    } catch (error) {
      console.error(error);
      return res.status(error.status).json(error);
    }
  }

  async logout(req, res) {
    try {
      await usuarioService.logout(req.headers.authorization);
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(error.status).json(error);
    }
  }

  async cadastrar(req, res) {
    try {
      const usuarioDTO = new UsuarioDTO(req.body);
      usuarioDTO.modeloValidoCadastro();

      const usuario = await usuarioService.cadastrar(usuarioDTO);
      return res.json(usuario);
    } catch (error) {
      console.error(error);
      return res.status(error.status).json(error);
    }
  }
}

module.exports = UsuarioController;