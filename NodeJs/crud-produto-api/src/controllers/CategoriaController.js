const categoriaService = require("../services/CategoriaService");

class CategoriaController {
  async obterPorTodos(req, res) {
    try {
      const produtos = await categoriaService.obterTodos();

      return res.json(produtos);
    } catch (error) {
      console.error(error);
    }
  }
  async obterPorId(req, res) {
    const { id } = req.params;
    try {
      const produto = await categoriaService.obterPorId(id);

      return res.json(produto);
    } catch (error) {
      console.error(error);
    }
  }
  async cadastrar(req, res) {
    try {
      const produto = await categoriaService.cadastrar(req.body);

      return res.json(produto);
    } catch (error) {
      console.error(error);
    }
  }
  async atualizar(req, res) {
    const { id } = req.params;
    try {
      const produto = await categoriaService.atualizar(id, req.body);

      return res.json(produto);
    } catch (error) {
      console.error(error);
    }
  }
  async deletar(req, res) {
    const { id } = req.params;
    try {
      return res.send(await categoriaService.deletar(id));
    } catch(error) {
      console.error(error);
    }
  }
}

module.exports = CategoriaController;