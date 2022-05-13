//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    arrayNumber = [];
    arrayNumber.push(numberOne, numberTwo); 

    arrayNumber.sort().reverse();

    return arrayNumber[0];
    
  }

  console.log(sum(10, 20));