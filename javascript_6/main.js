
// Ejercicio 1
/*
Ha habido un problema de datos maestros que afectó los precios de los productos. Compruebe si cada producto tiene un precio válido (entero o flotante, y mayor o igual a cero). Los productos con un precio de 0 son gratuitos y cuentan como un precio válido.*/
/*console.time("counter")
function hasValidPrice(product) {
    return (product === undefined ? false : typeof(product.price) === 'number' && product.price >= 0 ? true : false);
}
console.timeEnd("counter")

console.log(hasValidPrice({ "product": "Milk", price: 1.50 }))	//true
console.log(hasValidPrice({ "product": "Cheese", price: -1 }))	//false
console.log(hasValidPrice({ "product": "Eggs", price: 0 }))	//true
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))	//false
console.log(hasValidPrice())	//false*/

// Ejercicio 2
/* Estoy tratando de escribir una función para aplanar una matriz de subarreglos en un arreglo. (Supongamos que no sé que hay un método .flat() en el prototipo de Array).

En otras palabras, quiero transformar esto: [[1, 2], [3, 4]] en [1, 2, 3, 4].

Aquí está mi código:*/

function flatten(arr) {
  arr = arr.reduce((element1, element2) => element1.concat(element2), []);
  return arr.map(item => Array.isArray(item)).includes(true) ? flatten (arr) : arr;
  }

console.log(flatten([[1, 2], [3, 4]]))	// [1, 2, 3, 4]
console.log(flatten([[1], [2], [3], [4]]))	// [1, 2, 3, 4]
console.log(flatten([["a", "b"], ["c", "d"]]))	// ["a", "b", "c", "d"]
console.log(flatten([[true, false], [false, false]]))	// [true, false, false, false]
console.log(flatten([[true, false], [false, false], [[true]]])) // Ejemplo solicitado



// Ejercicio 3
/*El siguiente código intenta agregar un clon de una arreglo a sí mismo. No hay ningún mensaje de error, pero los resultados no son los esperados. ¿Puedes arreglar el código?*/
/*
function clone(arr) {
    arr.push(arr.map(a => a));
    return arr
  }

console.log(clone([1, 1]))	//[1, 1, [1, 1]]
console.log(clone([1, 2, 3]))	//[1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"]))	//["x", "y", ["x", "y"]]
console.log(clone([true, false, true]))	//[true, false, true, [true, false, true]]*/
