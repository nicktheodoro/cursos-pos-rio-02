const Sequelize = require('sequelize');
const dbConfig = require('../configs/database');
const connection = new Sequelize(dbConfig);

const ProdutoModel = require('../models/ProdutoModel');

ProdutoModel.init(connection);

module.exports = connection;