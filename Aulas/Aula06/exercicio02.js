/*
  Defina um vetor com 8 numeros inteiros.
  Exiba a soma de todos os números.
  Exiba quantidade de números pares e ímpares.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let soma = 0;

numeros.forEach(element => {
  soma += element
});

console.log(soma)
