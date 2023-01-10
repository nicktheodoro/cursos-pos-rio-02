const ProdutoModel = require("../models/ProdutoModel");
const { where } = require('sequelize');

async function obterTodos() {
  return await ProdutoModel.findAll();
}

async function obterPorId(id) {
  const produto = await ProdutoModel.findByPk(id);

  if (!produto) {
    throw new 'Não foi possível encontrar o produto com id ' + id;
  }

  return produto;
}

async function cadastrar(obj) {
  const produto = await ProdutoModel.create(obj);

  if (!produto) {
    throw new 'Não foi possível cadastrar o produto';
  }

  return produto;
}

async function atualizar(id, obj) {
  const produto = await obterPorId(id);

  const atualizado = await ProdutoModel.update(obj, { where: { id } });

  if (!atualizado) {
    throw new 'Não foi possível atualizar o produto';
  }

  return obj;
}

async function deletar(id) {
  const produto = await ProdutoModel.destroy({ where: { id } });

  if (!produto) {
    throw new 'Não foi possível deletar o produto';
  }

  return id;
}

module.exports = {
  obterTodos,
  obterPorId,
  cadastrar,
  atualizar,
  deletar
}