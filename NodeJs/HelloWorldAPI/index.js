const express = require('express');
const port = 3000;

const app = express();

// GET básico
app.get('/hello-world', (req, res) => {
  res.send(`Hello world em express`);
});

// GET com parâmetro
app.get('/hello-world/:nome', (req, res) => {
  res.send(`Hello ${req.params.nome} em express`);
});

// GET com query simples
app.get('/query', (req, res) => {
  res.send(`Hello ${req.query.nome} em express`);
});

// GET com query multi-parâmetros
app.get('/query-multi', (req, res) => {
  res.send(`Hello ${req.query.nome} ${req.query.sobrenome}, ${req.query.idade} anos!`);
});

app.listen(port, () => console.log('Api rodando na porta 3000'));