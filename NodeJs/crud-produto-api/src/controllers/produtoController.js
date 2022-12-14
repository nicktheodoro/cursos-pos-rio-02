const produtoService = require("../services/ProdutoService");

class ProdutoController {
  obterPorTodos(req, res) {
    let produtos = produtoService.obterTodos();

    return res.json(produtos);
  }
  obterPorId(req, res) {
    const { id } = req.params;

    let produto = produtoService.obterPorId(id);

    return res.json(produto);
  }
  cadastrar(req, res) {
    let produto = produtoService.cadastrar(req.body);

    return res.json(produto);
  }
  atualizar(req, res) {
    const { id } = req.params;

    let produto = produtoService.atualizar(id, req.body);

    return res.json(produto);
  }
  deletar(req, res) {
    const { id } = req.params;
    
    return res.send(produtoService.deletar(id));
  }
}

module.exports = ProdutoController;