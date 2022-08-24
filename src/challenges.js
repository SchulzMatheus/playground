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
function highestCount(arrayOfNumbers) {
let qtd = 0;
let maiorNumero = arrayOfNumbers[0]
for (let i = 0; i<arrayOfNumbers.length; i+=1)
{
  if(arrayOfNumbers[i]>maiorNumero) //compara se o maior numero é menor que o valor i do array
  {
    maiorNumero = arrayOfNumbers[i] //caso seja, o maior numero é substituido pelo valor i do array
    qtd = 0; //reseta a contagem
  }
  if(arrayOfNumbers[i]===maiorNumero) // se o maior numero for igual o do array entao:
  {
    qtd += 1; //incrementa +1 a contagem
  }
}
return qtd; //retorna a quantidade de vezes que o maior valor se repetiu
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  if (cat2<cat1 && cat2!=0) //se a posição do gato 1 é maior que a posição do gato 2 temos que:
  {
    return 'cat2' //retorna gato 2, pois a posição dele é mais proxima do rato
  }
  if(cat1<cat2 && cat1!=0) //se a posição do gato 2 é maior que a posição do gato 1 temos que:
  {
    return 'cat1' //retorna gato 2, pois a posição dele é mais proxima do rato
  }
  
    return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(arrayofNumbers) {
  let fb = [];
  for(let i = 0; i<arrayofNumbers.length; i+=1)
  {
    if(arrayofNumbers[i]%3===0 && arrayofNumbers[i]%5===0)
    {
      fb.push('fizzBuzz')
    }
     else if(arrayofNumbers[i] % 3 === 0)
    {
      fb.push('fizz')
    }
     else if(arrayofNumbers[i]%5===0)
    {
      fb.push('buzz')
    }
    else
    {
      fb.push('bug!')
    }
  }
  return fb;
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
