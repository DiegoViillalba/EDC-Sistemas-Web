// Funciones

function saludar(nombre) {
    const msj = "hola " + nombre + "....!"

    return msj

    // console.log(msj)
}

let msjReturn = saludar("Diego")

console.log(msjReturn)

// Funciones declaradas

function sumar(num1, num2) {
    return num1 + num2
}
const resultado = sumar(1, 2)
console.log(resultado)

// Funciones anonimas

const sumarAnonima = function(num1, num2) {
    return num1 + num2
}
const resAnonima = sumarAnonima(1, 2)
console.log(resAnonima)

//Funciones Flecha

const sumarFlecha = (num1, num2) => {
    return num1 + num2
}
const resFlecha = sumarFlecha(1, 2)
console.log(resFlecha)