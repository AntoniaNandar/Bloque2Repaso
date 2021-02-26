/*
//MULTIPLICACION
function multiplicaion(n) {
    var uno = n * 1
    var dos = n * 2
    var tres = n * 3
    var cuatro = n * 4
    var cinco = n * 5
    return uno
}

var resultado = multiplicaion(9)

console.log(resultado)

function multiplicaion(n) {
    var operacion = 9 * n
    return ('9 *' + n + '=' + operacion) 
}

var resultado = multiplicaion(1)
var resultado2 = multiplicaion(2)
var resultado3 = multiplicaion(3)
var resultado4 = multiplicaion(4)

console.log (resultado)
console.log (resultado2)
console.log (resultado3)
console.log (resultado4)
 

var multiplica = 1;
var tabla = 9;

while (multiplica <= 9) {
    console.log (tabla + ' x ' + multiplica + '=' + (tabla * multiplica));
    multiplica ++;
}

//CHALLENGE
for (let numero = 1; numero < 5; numero++) {
    var operacion = 9 * numero 
    console.log('9 x' + numero + '=' + operacion);
}

let numero = 0;

while (numero <= 4) {
    console.log(numero)
    numero ++;
}
*/


//EJERCICIOS EN CLASE

//PROGRAMAMOS
/*var usuario = 'Antonia'
var contrasena = 123

do {
    var IngreseUsuario = prompt('Ingresa nombre de usuario');
    var IngreseContrasena = parseInt(prompt('ingresa contrasena'));
} while (IngreseUsuario !== usuario || IngreseContrasena !== contrasena)

//SUMEMOS Y PROMEDIO

var suma = 0;

for (var numero = 1; numero <= 5; numero++) {
    var numeros = prompt('ingresa un numero');
    suma = suma + parseInt(numeros); 
}
console.log(suma);
console.log(suma/5);

//EDADES
var contador = 0;
do {
    var numero = parseInt(prompt('Ingrese edades'));
    if (numero >= 18) {
        contador++
    } else {
        alert('Menor 18')
    }  
} while (numero !== 0)
console.log('Hay ' + contador + ' mayores de edad')

//PROMEDIO CONDICIONAL
var contador = -1;
var suma = 0; 
do {
    var numero = parseInt(prompt('Ingrese numero'))
    if (numero <= 9) {
        contador++
        suma = suma + numero
    }  
} while (numero !== 0)
alert('Salir') 

function promediar (numero1, numero2) {
    return numero1/numero2;
}
console.log(promediar(suma, contador));

//PARES E IMPARES
var contadorPar = 0;
var contadorImpar = 0;

do {
    var numero = parseInt(prompt('Ingrese numero'))
    comprobar(numero);
} while (numero !== 0)

function comprobar(numero1) {
    if (numero1 % 2 == 0 && numero1 !== 0) {
        contadorPar++;
    } else {
        contadorImpar++;
    }
}

if (contadorImpar > contadorPar {
    alert('Hay mas impares que pares')
} else {
    alert('Hay mas pares que impares')
} 
console.log(contadorPar);
console.log(contadorImpar); 

//DE NUMEROS A LETRAS 
var numeroIngresado = parseInt(prompt('Ingrese numero'));
switch (numeroIngresado) {
  case 1:
    console.log('a');
    break;
  case 2: 
    console.log('b')
    break;
  case 3: 
    console.log('c');
    break; 
  case 4:
    console.log('d');
    break;
  case 5:
    console.log('e');
    break;
  case 6: 
    console.log('f')
    break;
  case 7: 
    console.log('g');
    break; 
  case 8:
    console.log('h');
    break;  
  case 9: 
    console.log('i');
    break; 
  case 10:
    console.log('j');
    break;    
  default:
    console.log('default');
}*/