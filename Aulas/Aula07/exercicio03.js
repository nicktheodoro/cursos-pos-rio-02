/*
  Defina uma matriz 4X e retorne a posição (linha e coluna) 
  do maior elemento;
*/

var matriz =
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [130, 0, 1, 22]
  ];
let maior = 0;
let linha = 0;
let coluna = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    if (elemento > maior) {
      maior = elemento;
      linha = i;
      coluna = j;
    }
  }
}

console.log(`O maior elemento é ${maior}, na posição ${linha}X${coluna}`)