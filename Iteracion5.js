//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(params) {
  let suma = 0;
  for (const param of params) {
    if( typeof param === 'string'){
      suma += param.length;  
    }else{
      suma += param;
    }
    
  }
  return suma;

}
console.log(averageWord(mixedElements));