// Exercício 1

// let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

// function convertirAMayusculas(array){
//     array[0] = array[0].toUpperCase()
//     array[1] = array[1].toUpperCase()
//     array[2] = array[2].toUpperCase()
//     array[3] = array[3].toUpperCase()
//     array[4] = array[4].toUpperCase()
//     return array
//   }

//   console.log(convertirAMayusculas(peliculas))

// Exercício 2

function pasajeDeElementos(array1, array2) { 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    return array1  
   }