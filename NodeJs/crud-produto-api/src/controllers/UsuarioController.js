const usuarioService = require('../services/UsuarioService');
const { NaoAutorizadoError } = require("../errors/typeError");

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
}

module.exports = UsuarioController;