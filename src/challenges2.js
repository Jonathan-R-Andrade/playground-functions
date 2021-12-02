// Desafio 10
function techList(listTech, namePerson) {
  if (listTech.length === 0) {
    return 'Vazio!';
  }
  let retorno = [];
  listTech.sort();
  for (let value of listTech) {
    let obj = {
      tech: value,
      name: namePerson,
    };
    retorno.push(obj);
  }
  return retorno;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
