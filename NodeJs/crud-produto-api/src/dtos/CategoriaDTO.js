const { ModeloInvalidoError } = require("../errors/typeError");

class CategoriaDTO {
  constructor(obj) {
    obj = obj || {};

    this.id = obj.id;
    this.descricao = obj.descricao;
    this.criadoEm = obj.criadoEm;
    this.atualizadoEm = obj.atualizadoEm;
  }

  modeloValidoCadastro() {
    this._validarModelo();
  }

  modeloValidoAtualizacao() {
    this._validarModelo();
  }

  _validarModelo() {
    if (!this.descricao) {
      throw new ModeloInvalidoError(400, "A descricação é obrigatória para cadastro.")
    }
  }
}

module.exports = CategoriaDTO;