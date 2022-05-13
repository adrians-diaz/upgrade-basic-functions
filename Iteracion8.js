//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(params) {
  params.sort();
  //console.log(params);
  let i = 0;
  let valorArray = [];
  for (const param of params) {
    //console.log(param + "  " + params[params.indexOf(param) + 1]);
    if(param === params[params.indexOf(param) + 1]){
      i++;
    }else{
      valorArray.push(params[params.indexOf(param) - 1] + " se repite ⇀ " + i);
      i = 0;
    }
    if(i === 0){
      valorArray.push(param + " se repite ⇀ " + i);
    }

  }
  return valorArray;
}



console.log(repeatCounter(counterWords));