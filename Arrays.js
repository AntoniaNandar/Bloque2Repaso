//CHALLENGE 
/*
var nombres = ['Antonia', 'Daniel', 'Juana', 'Cecelia', 'Alejo']
for (let i = 0; i < 5; i++) {
    console.log(nombres[i]);
}
console.log('La cantidad de elementos de este Array es ' + nombres.length)

var frutas = ['Manzana', 'Pera', 'Mandarina', 'Mango', 'Fresa', 'Banano']
var i2 = 0;
while (i2 < 6) {
    console.log (frutas[i2]);
    i2 ++;
} 


//CLASE

const datos = ['a', 1, 'b', 2, 'c', 3, 'd', {}, true, 4];
let datosNoNumericos = [];
let suma = 0;
for (let i = 0; i < datos.length; i++) {
    let datosNumeros = parseInt(datos[i]); 
    if(!isNaN(datosNumeros)) {
        suma += datosNumeros
    } else {
        datosNoNumericos.push(datos[i])
    }
}
console.log(suma);
console.log(datosNoNumericos)

//STOP
const arreglo = [];
do {
    var valores = prompt('Ingresa cualquier cosa');
    arreglo.push(valores);
} while (valores !== 'stop')
arreglo.pop();
console.log(arreglo)

//DIVIDIR ARRAYS 
const pares = [];
const impares = [];
const noNumericos = []; 

do {
    var numeros = prompt('Ingresa un numero');   
    if(!isNaN(numeros) && numeros % 2 === 0) {
        pares.push(parseInt(numeros)); 
    }else if(!isNaN(numeros) && numeros % 2 !== 0){
        impares.push(parseInt(numeros));
    } else {
        noNumericos.push(numeros);
    }
} while (parseInt(numeros) !== 0)

pares.pop()
console.log(pares)
console.log(impares)
console.log(noNumericos)

//ELIMINAR EXTREMOS 

const numeros = []

do {
    var valores = parseInt(prompt('Ingresa un numero otra vez'))
    if(!isNaN(valores)) {
        numeros.push(valores)
    }
} while (valores !== 0)

numeros.sort()
numeros.splice(0,1)
numeros.pop()
console.log(numeros)

//DIVIDIR ARRAYS 
const datos1 = []
const datos2 = []
const datos3 = []

do {
    var datosIngresados = parseInt(prompt('Ingresa cualquier cosa'));
    datos1.push(datosIngresados)
    datos2.push(datosIngresados)
    datos3.push(datosIngresados)
} while (datosIngresados !== 0)

let tercio = datos1.slice(0, datos1.length/3)
let tercio2 = datos2.splice(datos2.length/3, datos2.length/3)
let tercio3 = datos3.splice(datos3.length/1.5, datos3.length)

console.log(tercio)
console.log(tercio2)
console.log(tercio3)

*/
