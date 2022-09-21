// Declarando objeto.
let pessoa = {
  nome: "Nicolas",
  idade: 28,
  sexo: 'M',
  techs: ["JavaScript", "Java", "C#", "SQL"],
}
console.log(pessoa);

// Acessando valores de uma propriedade de um objeto.
let nome = pessoa.nome;
console.log(nome);

// Acessando valores de uma propriedade de um objeto via keys(chaves). 
let nomeKey = pessoa["nome"];
console.log(nomeKey);

// Montando template string com propriedade de um objeto.
// '\n' é uma quebra de linha.
let msg = `Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nTechs: ${pessoa.techs}`;
console.log(msg);

// Método para retornar um Array(lista) das chaves de um objeto.
let chaves = Object.keys(pessoa);
console.log(chaves);

// Método para retornar um Array(lista) dos valores de um objeto.
let valores = Object.values(pessoa);
console.log(valores);