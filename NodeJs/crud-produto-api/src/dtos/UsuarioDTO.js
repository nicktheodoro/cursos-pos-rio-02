const { ModeloInvalidoError } = require('../errors/typeError');

module.exports = class UsuarioDTO {
  constructor(obj) {
    obj = obj || {};

    this.id = obj.id;
    this.nome = obj.nome;
    this.email = obj.email;
    this.senha = obj.senha;
    this.criadoEm = obj.criadoEm;
    this.atualizadoEm = obj.atualizadoEm;
  }

  modeloValidoCadastro() {
    const validacao = !!(this.email && this.senha && this.nome);

    if(!validacao) {
      throw new ModeloInvalidoError(400, "Os campos nome, e-mail e senha são obrigatórios.")
    }
  }

  modeloValidoAtualizacao() {
    const validacao = !!(this.id && this.email && this.nome);

    if(!validacao) {
      throw new ModeloInvalidoError(400, "Os campos id, nome e e-mail são obrigatórios.")
    }
  }
}