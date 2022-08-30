  /*
    Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem 
    que diga se ela poderá ou não votar este ano (não é necessário considerar o 
    mês em que a pessoa nasceu);
  */
      let anoAtual = new Date().getFullYear();

      let anoNascimento = 1993;

      let idade = anoAtual - anoNascimento;

      if(idade < 16) {
        console.log("Não pode votar");
      } else if(idade < 18 || idade >= 65) {
        console.log("Voto opcional")
      } else {
        console.log("Voto obrigatório")
      }
