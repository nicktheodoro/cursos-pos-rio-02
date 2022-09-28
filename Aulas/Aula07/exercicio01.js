/*
  Defina uma matriz 4 X 4, conte e escreva quantos 
  valores maiores que 10 ela possui.
*/
var matriz =
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [130, 0, 1, 22]
  ];

let contador = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    if (elemento > 10) {
      contador++;
    }
  }
}

console.log(contador)