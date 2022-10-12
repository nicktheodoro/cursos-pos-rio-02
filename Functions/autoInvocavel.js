// Função auto-invocável (IIFE)

//Função Sem retorno e com parâmetro
(function teste(msg) {
  console.log(msg)
})('oi');

//Função com retorno e com parâmetro
(function teste2(msg) {
  return console.log(msg)
})('oi');

//Função anonima sem retorno e com parâmetro
(function (msg) {
  console.log(msg)
})('oi');

//Função anonima com retorno e com parâmetro
(function (msg) {
  return console.log(msg)
})('oi');

//Arrow function sem retorno e com parâmetro
((msg) => {
  console.log(msg)
})('oi');

//Arrow function com retorno e com parâmetro
((msg) => {
  return console.log(msg)
})('oi');

//Arrow function com retorno e com parâmetro
(msg => console.log(msg))('oi');