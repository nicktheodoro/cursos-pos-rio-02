// Declarando o Array.
var frutas = ['Maçã', 'Banana'];

// Adcionando elemento na última posição do array.
var adicionar = frutas.push('L2aranja')

// Removendo elemento na última posição do array.
var remover = frutas.pop();

// Removendo elemento na primeira posição do array.
var remover = frutas.shift();

// Adicionando elemento na primeira posição do array.
var adicionar = frutas.unshift('Morango')

// Obtendo index de um elemento na lista.
var pos = frutas.indexOf('Banana');

// Removendo um elemento utilizando o index como parametro.
var itemRemovido = frutas.splice(pos, 1)

// Copiando um array
var copiar = frutas.slice(); // é assim que se copia
console.log(copiar)
