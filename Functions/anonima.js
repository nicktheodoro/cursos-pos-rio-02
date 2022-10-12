// Funções anonimas

// Função anonima
const teste = function (msg) {
  console.log(msg)
}

// arrow funcion sem chaves (na mesma linha), sempre retorna
(msg => console.log(msg))('oi')

// podemos atribuir funções anonimas a váriaveis
const arrowFunciont = (msg) => {
  console.log(msg)
};

