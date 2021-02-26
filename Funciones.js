//MINI CHALLENGE
/*
let funcion1 = (numero, numero2) => {
    numero > numero2 ? console.log('el primer numero es mayor que el segundo') : console.log('El segundo numero es mayor que el primero')
}

funcion1(2, 8)

//CHALLENGE
arrayNumerico = ['String', true, 18, 21, 40, 10 ]

let calcular = array => {
    var suma = 0;
    var contador = 0; 
    array.forEach(i => {
        let comprobar = parseInt(i);
        if (!isNaN(comprobar)) {  
            suma = suma + i
            contador++
        } else {
            console.log('no son un numero')
        }
    })
    let respuesta = suma/contador
    console.log(respuesta)
}

calcular(arrayNumerico)


//TRY CATCH
let win = 0

do {
    let guess = prompt('Ingresa numero')
    guessNumber(25, guess)
} while(win == 0)

function guessNumber(secret, guess) {
    try {
        if (!isNaN(+guess)) {
            throw new Error('No fue un numero lo que ingresaste')
        } else if (guess == '') {
            throw new Error('No se ingreso nada')
        } else if (+guess > secret) {
            throw new Error('el numero ingresado es muy alto')
        } else if (+guess < secret) {
            throw new Error('el numero ingresado es muy bajo')
        }
        win = 1;
        alert('correcto el numero era ' + secret)
    }
    catch(error) {
        console.error(error);
    }
}*/

//PROGRAMAN
/*
let usuarios = [];
let cantidadUsuarios = 5;

let guardarUsuario = () => {
    try {
        let nombre = prompt('Ingresa tu nombre de usuario')
        let existe = usuarios.find(x => x === nombre)
        if (!existe) {
            usuarios.push(nombre)
        } else {
            throw new Error('Este usuario ya existe')
        }
    } catch (error) {
        alert(error)
    }
}

do {
    guardarUsuario()
} while (usuarios.length < cantidadUsuarios)

console.log(usuarios)*/

//PROGRAMAMOS ESTE SI ES

/*
let usuarios = [];
let cantidadUsuarios = 3;

class Persona {
    activo = true
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }
}

let guardarUsuario = () => {
    try {
        let nombre = new Persona(prompt('Ingresa tu nombre de usuario'), prompt('Ingresa tu apellido'))
        let existe = usuarios.find(x => x.nombre === nombre.nombre && x.apellido === nombre.apellido)
        if (!existe) {
            usuarios.push(nombre)
        } else {
            throw new Error('Este usuario ya existe')
        }
    } catch (error) {
        alert(error)
    }
}

let modificar = () => {
    try {
        var comprobar = new Persona(prompt('buscando este usuario'), prompt('buscando apellido'))
        var existe = usuarios.find(x => x.nombre === comprobar.nombre && x.apellido === comprobar.apellido)
        if (!existe) {
            throw new Error('Su usuario no existe, no puedes midificar')
        } else {
            alert('Tu usuario SI EXISTE, modificalo')
            var indice = usuarios.findIndex((x) => {
                if (x.nombre === comprobar.nombre && x.apellido === comprobar.apellido) {
                  return true;
                }
              });
            console.log(indice) 
            usuarios[indice] = new Persona(prompt('Ingresa tu NUEVO nombre de usuario'), prompt('Ingresa tu NUEVO apellido'))
        }
    } catch (error) {
        alert(error)
    }
}

do {
    guardarUsuario()
} while (usuarios.length < cantidadUsuarios)

while (window.confirm('Deseas agregar otro usuario ?') === true) {
    confirm(guardarUsuario())
}

while (window.confirm('Deseas modificar su usuario ?') === true) {
    confirm(modificar())
}
console.log(usuarios)*/
