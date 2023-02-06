// Ejercicio 1
/*Escribir una función que tome un objeto como argumento. Devuelve la suma de todos los valores de las propiedades del objeto.*/

function myFunction(obj) {
    let sum = 0;
    for (const key in obj) {
        sum += obj[key]
    } return sum;
}

  console.log(myFunction({a:1,b:2,c:3}))     // 6          
  console.log(myFunction({j:9,i:2,x:3,z:4}))  // 18         
  console.log(myFunction({w:15,x:22,y:13}))   // 50


// Ejercicio 2
/* La sucesión Fibonacci es una secuencia infinita de números naturales. Los primeros son: 1 1 2 3 5 8 13 21 34 55 89 .... La secuencia comienza con 1 y 1. De ahí en adelante cada número se calcula con la suma de los dos anteriores.

Escribe una función recurrente que calcule el número n de la secuencia (basado en 0). Por ejemplo:*/

  function fibonacci(n) {
    return n < 2 ? 1: fibonacci(n - 1) + fibonacci(n - 2);
  }
console.log(fibonacci(0)) //= 1
console.log(fibonacci(1)) //= 1
console.log(fibonacci(4)) //= 5
console.log(fibonacci(5)) //= 8