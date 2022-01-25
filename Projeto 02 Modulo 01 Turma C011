console.log("Seja Bem Vindo ao Jokenpô");
console.log();
console.log(
  "Para jogar basta digitar o numero de rodadas que deseja jogar e seguir em frente"
);
console.log();
console.log("Lembre-se, 0 = Pedra, 1 = Papel e 2 = Tesoura");
console.log();
console.log("Bom Jogo");
var compare = function (usuario, computador) {
  if (usuario === computador) {
    console.log("Os dois usuarios escolheram a mesma opcao");
  } else if (
    (usuario === 0 && computador === 2) ||
    (usuario === 2 && computador === 1) ||
    (usuario === 1 && computador === 0)
  ) {
    console.log("voce ganhou");
    console.log(
      `usuario escolheu ${opcaos[usuario]} e computador escolheu ${opcaos[computador]}`
    );
    contagemusuario++;
  } else {
    console.log("voce perdeu");
    console.log(
      `usuario escolheu ${opcaos[usuario]} e computador escolheu ${opcaos[computador]}`
    );
    contagemcomputador++;
  }
};
var contagemusuario = 0;
var contagemcomputador = 0;

while (true) {
  var opcaos = ["pedra", "papel", "tesoura"];
  let numeroDeJogadas = +prompt("Digite a quantidade de vezes a ser jogada:");

  for (let i = 0; i < numeroDeJogadas; i++) {
    let opcaodousuario = +prompt(
      "Voce escolhe 0 = pedra, 1 = papel ou 2 = tesoura?"
    );

    let opcaodocomputador = Math.floor(Math.random() * (3 - 0));

    console.log("Computador: " + opcaodocomputador);
    compare(opcaodousuario, opcaodocomputador);
  }
  if (contagemusuario > contagemcomputador) {
    console.log("Usuario vence com " + contagemusuario + "Jogada");
  } else if (contagemcomputador > contagemusuario) {
    console.log("Computador vence com " + contagemcomputador + " Vitoria");
  } else {
    console.log("Isto é um Empate");
  }
  let final = prompt("Voce quer jogar novamente: [s/n]");
  if (final[0].toLowerCase() === "n") {
    break;
  }
}
