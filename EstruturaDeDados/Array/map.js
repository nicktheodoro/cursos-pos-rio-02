var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]

var triplo = numbers.map((elemento) => {
  return elemento * 3
})

const pessoas = [
  {nome: 'Nicolas', idade: 28},
  {nome: 'Fulano', idade: 22},
  {nome: 'Beltrano', idade: 25},
]

const nomePessoas = pessoas.map(elemento => {
  return elemento.nome
});
console.log(nomePessoas)