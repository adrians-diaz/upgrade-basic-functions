//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(params) {
  let arrayNumber = [];
  for (const param of params) {
    arrayNumber.push(param.length); 
  }
  arrayNumber.sort();

  for (const param of params) {
    if(arrayNumber[0] == param.length){
      return param;
      break;

    } 
  }

}

console.log("Mi metodo: " + findLongestWord(avengers));

function findLongestWord2(params) {
  let heroe;
  heroe = "";
  for (const param of params) {
      if(heroe.length < param.length){
        heroe = param;
    } 
  }
  return heroe;
}

console.log("Metodo clase: " + findLongestWord2(avengers));
