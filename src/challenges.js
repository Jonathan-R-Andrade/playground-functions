// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(' ');
  return palavras;
}

// Desafio 4
function concatName(arrStrings) {
  if (arrStrings.length === 0)
    return '';
  else if (arrStrings.length === 1)
    return arrStrings[0] + ", " + arrStrings[0];
  else
    return arrStrings[arrStrings.length - 1] + ", " + arrStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrNumeros) {
  let numeroRepeticoes = {
  }

  if (arrNumeros.length === 0)
    return undefined;

  let maior = arrNumeros[0];
  numeroRepeticoes[maior] = 1;

  for (let i = 1; i < arrNumeros.length; i += 1) {
    let numero = arrNumeros[i];
    if (numeroRepeticoes[numero] === undefined) {
      numeroRepeticoes[numero] = 1;
      if (numero > maior)
        maior = numero;
      continue;
    }
    numeroRepeticoes[numero] += 1;
    if (numero > maior)
      maior = numero;
  }

  return numeroRepeticoes[maior];
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
