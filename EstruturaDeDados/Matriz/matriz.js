// Como declarar uma matriz
var matriz =
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ];

  // como percorrer uma matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    var elemento = matriz[i][j]
    console.log(elemento)
  }
}
