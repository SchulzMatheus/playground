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
  let array = string.split(" "); 
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
  let cat1mousedis = Math.abs(cat1 - mouse)  //math.abs pra tirar o modulo, e calculando a distancia entre cat1 e mouse
  let cat2mousedis = Math.abs(cat2 - mouse) // same but with cat2
  if (cat2mousedis<cat1mousedis)
  {
    return 'cat2' 
  }
  if(cat1mousedis<cat2mousedis) 
  {
    return 'cat1' 
  }
  
    return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(arrayofNumbers) {
  let fb = [];
  for(let i = 0; i<arrayofNumbers.length; i+=1)
  {
    if(arrayofNumbers[i]%3===0 && arrayofNumbers[i]%5===0) //vendo se é divisivel por 3 ou 5 aplicando modulo
    {
      fb.push('fizzBuzz')
    }
     else if(arrayofNumbers[i] % 3 === 0 && arrayofNumbers[i]%5!=0) //vendo se é divisivel por 3 e não por 5
    {
      fb.push('fizz')
    }
     else if(arrayofNumbers[i]%5===0 && arrayofNumbers[i]%3!=0) //vendo se é divisivel por 5 e não por 3;
    {
      fb.push('buzz')
    }
    else //se não cair em nenhuma condição então não é nem divisivel por 3 e nem por 5
    {
      fb.push('bug!')
    }
  }
  return fb;
}

// Desafio 9
function encode(string) {
  let x = string.split('');
  let qtd = '';
  for(let i = 0; i<x.length; i+=1)
  {
    //criando if para saber se o valor i do array é igual a,e,i,o ou u caso verdadeiro substituindo o valor desse elemento por 1,2,3,4 ou 5 respectivamente
    if(x[i]==='a')
    x[i]=1
    if(x[i]==='e')
    x[i]=2;
    if(x[i]==='i')
    x[i]=3;
    if(x[i]==='o')
    x[i]=4;
    if(x[i]==='u')
    x[i]=5;
  }
    qtd = x.join('')
  return qtd;
}
function decode(string2) {
  let y = string2.split('');
  let qtd2 = '';
  for(let i2 = 0; i2<y.length; i2+=1)
  {
    //mesma coisa da função anterior só que ao contrario.
    if(y[i2]==='1')
    y[i2]='a'
    if(y[i2]==='2')
    y[i2]='e'
    if(y[i2]==='3')
    y[i2]='i'
    if(y[i2]==='4')
    y[i2]='o'
    if(y[i2]==='5')
    y[i2]='u'
  }
    qtd2 = y.join('')
  return qtd2;
}

// Desafio 10
function techList(array, string) {
  let obj1 = []; //criando o objeto
  let x = array.sort(); // organizando o array em ordem alfabetica
  if (array.length===0) //se o array estiver vazio o programa deve retornar vazio
  {
    return 'Vazio!';
  }
  for (let i = 0; i<x.length; i++) //percorrendo o array
  {
    obj1.push({
      tech: x[i],           //usando a função push para empurrar valores no objeto
      name: string
    }) 
  }
  return obj1;
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
