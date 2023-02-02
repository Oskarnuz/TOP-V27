/*
Escribir una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas.
Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve undefined.*/


// Ejercicio 1
function myFunction(obj) {
    return ('a' in obj === true ? obj?.a?.b : undefined);
  }

console.log(myFunction({a:1}));          //undefined
console.log(myFunction({a:{b:{c:3}}}));  //{c:3}
console.log(myFunction({b:{a:1}}));      //undefined 
console.log(myFunction({a:{b:2}}));      //2
​
//Ejercicio 2

function incrementItems(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += 1;
    }
    return arr;
  }

console.log(incrementItems([0, 1, 2, 3]));      //[1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8]));      //[3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4]));  //[0, -1, -2, -3]

// Ejercicio 3

function checkEquals(arr1, arr2) {
    for (let i = 0 ; i < arr1.length ; i++){
       if (arr1[i] != arr2[i]) {
         return false;
       }  
    }
    return true;
   }

console.log(checkEquals([1, 2], [1, 3]));         //false
console.log(checkEquals([1, 2], [1, 2]));         //true
console.log(checkEquals([4, 5, 6], [4, 5, 6]));   //true
console.log(checkEquals([4, 7, 6], [4, 5, 6]));   //false
console.log(checkEquals([4, 7, 6], [4, 6, 7]));   //false

