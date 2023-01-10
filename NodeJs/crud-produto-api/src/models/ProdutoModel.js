const { Model, DataTypes } = require('sequelize')

class ProdutoModel extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      valor: DataTypes.DOUBLE,
      qtdEstoque: DataTypes.INTEGER
    },{
      sequelize: connection,
      schema: 'public',
      tableName: 'produtos',
      createdAt: 'criadoEm',
      updatedAt: 'atualizadoEm',
      timestamps: true
    })
  }
}

module.exports = ProdutoModel;