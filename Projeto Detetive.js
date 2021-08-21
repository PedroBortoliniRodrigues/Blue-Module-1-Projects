console.log("Projeto detetive")

console.log()

console.log("Seja bem vindo a sala de interrogatório, responda as perguntas que serão feitas com proposito de ajudar nas investigações sobre a morte de Joseph Clynton.")

console.log()

console.log("A partir de agora qualquer fala estará sendo gravada e poderá ser usada nas investigações.")

console.log()

console.log("As respostas devem ser objetivas sim ou nao, qualquer resposta diferente será inválida e acarretara em uma advertencia!!!")

console.log()



function pergunta(texto){
  let resposta = String(prompt(texto))
  
  if ((resposta.toLowerCase()) == 'sim'){
    return 1;
  } else {
    return 0;
  }

}

let pergunta1 = pergunta("Telefonou para a vitima no dia do ocorrido ?")

console.log()

let pergunta2 = pergunta("Esteve no local do crime no dia do ocorrido ?")

console.log()

let pergunta3 = pergunta("Tem residencia ou moradia perto da vitima ?")

console.log()

let pergunta4 = pergunta("Devia para a vítima ?")

console.log()

let pergunta5 = pergunta("Já trabalhou com a vítima diretamente ou indiretamente ?")

console.log()

let soma = pergunta1+pergunta2+pergunta3+pergunta4+pergunta5

let condicoes =[ "Inocente","Inocente", "Suspeito", "cumplice", "cumplice" , "Assasino"] 

console.log()
console.log()
console.log()


console.log(`Voce foi declarado ${condicoes[soma]}`)
