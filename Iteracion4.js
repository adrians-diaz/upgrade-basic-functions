//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(params) {
  let suma = 0;
  for (const param of params) {
    suma +=  param;    
  }
  return suma / params.length;
}
console.log(average(numbers));