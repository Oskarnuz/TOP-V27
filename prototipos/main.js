// Ejercicio 1

function Persona(nombre, peso, altura) {
    this.nombre = nombre,
    this.peso = peso,
    this.altura = altura
}

Persona.prototype = {
    saludar(nombre) {

        return `Hola ${nombre}, me llamo ${this.nombre}`
    },
    bmi() {

        return (this.peso/Math.pow(this.altura, 2)).toFixed(2)
    }
}

const pedro = new Persona("Pedro", 72, 1.5);
console.log(pedro.saludar("Maria")); // "Hola Maria, me llamo Pedro"
console.log(pedro.bmi()); // 32

// Ejercicio 2


function Auto() {
    this.velocidad = 0
}

Auto.prototype = {
    acelerar(incremento) {

        return this.velocidad += incremento
    }
    ,
    frenar(decrecer) {
        const velocidadFinal = this.velocidad -= decrecer
        //console.log(velocidadFinal)
            if(velocidadFinal < 0) {
                return this.velocidad = 0
            } else {

                return velocidadFinal
            }
    }
}

const a1 = new Auto();
console.log(a1.velocidad); // 0

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad); // 3

a1.frenar(2); //
console.log(a1.velocidad); // 1

a1.frenar(3);
// la velocidad quedaría en -1, así que se deja en 0
console.log(a1.velocidad); // 0


// Ejercicio 3

String.prototype.palindrome = function () {
    let regex= /[\W_]/g;
    let stringRegex = this.replace(regex, '').toLowerCase();
    let stringeReverted = stringRegex.split('').reverse().join('');
    if (stringRegex === stringeReverted){
      return true;
    }
    else{
      return false
    }
  };

console.log("anita lava la tina".palindrome()); // true
console.log("prueba".palindrome()); // false