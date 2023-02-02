/*
Escribir una función que tome dos fechas como argumentos. Devuelve true si las fechas caen exactamente en el mismo día, false si no.
*/
//Opcion 1
/*function myFunction(dateX, dateY) {
    if(dateX.getDate() == dateY.getDate() && dateX.getMonth() == dateY.getMonth() && dateX.getFullYear() == dateY.getFullYear()) {
        return true
    } else {
        return false
    }
  }*/
   


// Opcion 2
function myFunction(dateX, dateY) {
    return dateX.toString() == dateY.toString() ? true : false
    
  }

  console.log(myFunction(new Date(2019, 0, 1), new Date(2019, 0, 1)))
  console.log(myFunction(new Date('2020/01/01'), new Date('2020/01/02')));
  console.log(myFunction(new Date(2019, 0, 1), new Date(2019, 1, 1)))
  console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')))
  //console.log(myFunction(new Date('2000/01/01'), new Date(2000,01,01))) "Para esta evaluacion es necesario ajustar el valor del mes a 0"
