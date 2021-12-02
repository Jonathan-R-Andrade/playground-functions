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
  if (arrStrings.length === 0) {
    return '';
  }
  if (arrStrings.length === 1) {
    return arrStrings[0].concat(', ', arrStrings[0]);
  }
  return arrStrings[arrStrings.length - 1].concat(', ', arrStrings[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function maxNumber(arrNumeros) {
  let max = arrNumeros[0];
  for (let i = 1; i < arrNumeros.length; i += 1) {
    if (arrNumeros[i] > max) {
      max = arrNumeros[i];
    }
  }
  return max;
}
function highestCount(arrNumeros) {
  let numeroRepeticoes = {};
  for (let i = 0; i < arrNumeros.length; i += 1) {
    let numero = arrNumeros[i];
    if (numeroRepeticoes[numero] === undefined) {
      numeroRepeticoes[numero] = 1;
    } else {
      numeroRepeticoes[numero] += 1;
    }
  }
  return numeroRepeticoes[maxNumber(arrNumeros)];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function trocarNumeroPorPalavra(numero) {
  if ((numero % 3) === 0 && (numero % 5) === 0) {
    return 'fizzBuzz';
  }
  if ((numero % 3) === 0) {
    return 'fizz';
  }
  if ((numero % 5) === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(arrNumeros) {
  let retorno = [];
  for (let numero of arrNumeros) {
    retorno.push(trocarNumeroPorPalavra(numero));
  }
  return retorno;
}

// Desafio 9
function encode(str) {
  let retorno = str.replace(/a/g, '1');
  retorno = retorno.replace(/e/g, '2');
  retorno = retorno.replace(/i/g, '3');
  retorno = retorno.replace(/o/g, '4');
  retorno = retorno.replace(/u/g, '5');
  return retorno;
}

function decode(str) {
  let retorno = str.replace(/1/g, 'a');
  retorno = retorno.replace(/2/g, 'e');
  retorno = retorno.replace(/3/g, 'i');
  retorno = retorno.replace(/4/g, 'o');
  retorno = retorno.replace(/5/g, 'u');
  return retorno;
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
