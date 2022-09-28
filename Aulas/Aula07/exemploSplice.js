var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais); 
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

// Isso é como se faz para remover itens, n define o número de itens a se remover
// a partir da posição (pos) em direção ao fim da array.
var itensRemovidos = vegetais.splice(1, 2); 

// ['Nabo', 'Rabanete']
console.log(itensRemovidos); 
// ['Repolho', 'Cenoura'] (o array original é alterado)
console.log(vegetais); 
