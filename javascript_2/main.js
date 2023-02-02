/*
Escribe una función que tome dos arreglos (a y b) como argumentos.
Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'. Devolver el objeto.
*/
function myFunction(a, b){
    let newArr = [];
    for(let i = 0; i < a.length; i++){
        newArr.push([a[i], b[i]])      
    } 
    return Object.fromEntries(newArr);
}

myFunction(['a','b','c'],[1,2,3]);
myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}])
myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false])
