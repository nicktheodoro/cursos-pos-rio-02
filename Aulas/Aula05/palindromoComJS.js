let string = "Arara".toLowerCase().trim();

let stringReversa = string.split('').reverse().join('');

if(string === stringReversa) {
  console.log("É palíndromo")
} else {
  console.log("Não É palíndromo")
}