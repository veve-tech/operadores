//questão 11.//
let numero = parseInt(prompt("Digite um número positivo:"));

if (numero >= 0) {
  console.log("Números ímpares de 0 até", numero, ":");
  for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} else {
  console.log("Número inválido! Insira um número positivo.");
}

//questão 12//
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

if (numero < 0) {
  console.log("Não existe fatorial de número negativo!");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log("Fatorial de", numero, "é:", fatorial);
}

//questão 13.//
let numeroSecreto = Math.floor(Math.random() * 101); // entre 0 e 100
let tentativas = 10;

console.log("Jogo da adivinhação! Você tem 10 tentativas.");

for (let i = 1; i <= tentativas; i++) {
  let palpite = parseInt(prompt(`Tentativa ${i}: Digite seu palpite (0 a 100):`));

  if (palpite === numeroSecreto) {
    console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) na tentativa ${i}.`);
    break;
  } else if (palpite < numeroSecreto) {
    console.log("O número secreto é MAIOR.");
  } else {
    console.log("O número secreto é MENOR.");
  }

  if (i === tentativas) {
    console.log(`Acabaram as tentativas! O número secreto era: ${numeroSecreto}.`);
  }
}
