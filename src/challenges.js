// Desafio 1
function compareTrue(x, y) {
  
  if((y && x) === true){
    return true;
  } 
 {
    return false;
  }
}

// Desafio 2
function calcArea(b, h) {
  let a;
  a = (b*h)/2;
  return a;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" "); //.split
  return array;
}

// Desafio 4
function concatName(array) { 
  return array[array.length-1].concat(", ", array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = 3*wins;
  let b = 1*ties;
  let c = a+b;
  return c;
}

// Desafio 6
function highestCount() {
  
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

// Desafio 10
function techList() {
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
  techList,
};
