// Descobrir qual é a maior e a menor idade.

let idades = [28, 22, 44, 26, 20];
let maior;
let menor;

// for (let i = 0; i < idades.length; i++) {
//   const element = idades[i];

//   if(element > maior || emaior == undefind) {
//     maior = element;
//   }

//   if(element < menor || menor == undefined) {
//     menor = element;
//   }
// }
console.log("Maior: " + maior);
console.log("Menor: " + menor);

idades.forEach((element) => {
  if(element > maior || maior == undefined) {
    maior = element;
  }

  if(element < menor || menor == undefined) {
    menor = element;
  }
})

console.log("Maior: " + maior);
console.log("Menor: " + menor);