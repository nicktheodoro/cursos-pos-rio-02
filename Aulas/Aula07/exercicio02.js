/*
  Defina uma matriz 5 X 5, Preencha com 1 a diagonal principal 
  e com 0 os demais elementos. Em seguida imprima a matriz na tela.
*/
var matriz =
  [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ];

  for (let i = 0; i < matriz.length; i++) {
    const linha = matriz[i];
    console.log(linha.join(''))
  }
