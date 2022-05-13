//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];



//NO ME MOLA PORQUE LOS DESORDENA // CAMBIAR CON DOBLE FOR

function removeDuplicates(params) {
  //params.sort();
  for (let i = 0; i < params.length; i++) {
      for (let index = 0; index < params.length; index++) {
        //console.log(param + "-" + i + " " + params[index] + "-" + index);
        if( params[i] === params[index] && index !== i ){
          console.log("da true");
          params.splice(index, 1);
          i--;
          index--;  
        }
    }
  }
  return params;
}

console.log(removeDuplicates(duplicates));