const array1 = [5, 12, 8, 130, 44];

//retorna sempre o primeiro elemento que satifaz a condição.
const found = array1.find(element => element > 10);

const found2 = array1.find(element => {
  return element > 100;
});

// Retorna 12.
console.log(found);
// Retorna 130.
console.log(found2)
