// Declarando um array
var frutas = ['Maçã', 'Banana', 'Uva', 'Abacaxi'];

// propriedade com o tamanho de um Array(lista)
console.log(frutas.length);

// percorrendo uma lista utilizando for
for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  console.log(element);
}

console.log('--------------');

// percorrendo uma lista utilizando forEach
// não esquecer da arrow function () => {} como parametro
frutas.forEach((fruta) => {
  console.log(fruta);
})

console.log(frutas)
