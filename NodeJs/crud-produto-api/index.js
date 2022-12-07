// Função require importa a biblioteca express e torna disponível para uso dentro da aplicação.
const express = require("express");
// Define a porta que a aplicação irá rodar
const port = 3000;
// Utilizando express para criar nossa aplicação.
const app = express();
// É uma função que analisa as request/JSON recebidas e coloca os dados no req.body
app.use(express.json());

// Inicia a aplicação na porta 3000
app.listen(port, () => console.log(`Api rodando na porta ${port}`));

const produtoService = require("./src/services/ProdutoService");

app.get("/produtos", (req, res) => {
    res.json(listaProdutos);
});

app.get("/produtos/:id", (req, res) => {
    const produto = listaProdutos.find(produto => produto.id == req.params.id);

    if (!produto) {
        res.send("Produto não encontrado, tente novamenete por favor.")
    }

    res.json(produto);
});

app.post("/produtos", (req, res) => {
    let produto = produtoService.cadastrar(req.body);
    
    res.send(produto);
});

app.put("/produtos/:id", (req, res) => {
    const index = listaProdutos.findIndex(produto => produto.id == req.params.id);

    if (index < 0) {
        res.send("Produto não encontrado, tente novamenete por favor.")
    }

    const produto = { id: parseInt(req.params.id), ...req.body };

    listaProdutos.splice(index, 1, produto);

    res.send(produto);
});

app.delete("/produtos/:id", (req, res) => {
    const index = listaProdutos.findIndex(produto => produto.id == req.params.id);

    if (index < 0) {
        res.send("Produto não encontrado, tente novamenete por favor.")
    }

    listaProdutos.splice(index, 1);

    res.send(`${req.params.id} deletado com sucesso.`);
});
