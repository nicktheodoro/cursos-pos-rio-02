let string = "Arara".toLowerCase();
let tamanho = string.length
let palidromo;

for (let i = 0; i < tamanho / 2; i++) {
  let posicaoAtual = string[i]
  let teste = string[tamanho - 1 - i]

  if(posicaoAtual !== teste) {
    palidromo = false
  } else  {
    palidromo = true
  }
}

if(palidromo) {
  console.log("É palíndromo")
} else {
  console.log("Não é palíndromo")
}