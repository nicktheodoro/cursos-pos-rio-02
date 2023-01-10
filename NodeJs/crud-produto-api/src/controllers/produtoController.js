const produtoService = require("../services/ProdutoService");

class ProdutoController {
  async obterPorTodos(req, res) {
    try {
      const produtos = await produtoService.obterTodos();

      return res.json(produtos);
    } catch (error) {
      console.error(error);
    }
  }
  async obterPorId(req, res) {
    const { id } = req.params;
    try {
      const produto = await produtoService.obterPorId(id);

      return res.json(produto);
    } catch (error) {
      console.error(error);
    }
  }
  async cadastrar(req, res) {
    try {
      const produto = await produtoService.cadastrar(req.body);

      return res.json(produto);
    } catch (error) {
      console.error(error);
    }
  }
  async atualizar(req, res) {
    const { id } = req.params;
    try {
      const produto = await produtoService.atualizar(id, req.body);

      return res.json(produto);
    } catch (error) {
      console.error(error);
    }
  }
  async deletar(req, res) {
    const { id } = req.params;
    try {
      return res.send(await produtoService.deletar(id));
    } catch(error) {
      console.error(error);
    }
  }
}

module.exports = ProdutoController;