//PROGRAMAMOS
/*let contenedor = document.getElementById('contenedor')
function getPokemon(pokemon) {
    var newimg = document.createElement('img')
    newimg.setAttribute = 'src'
    contenedor.appendChild(newimg)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(json => json.sprites.front_default)
        .then(img =>{
            console.log(img)
            newimg.src = img
        })
        .catch(error => {
            console.error(error);
        });
}
console.log(contenedor)

getPokemon(66)
getPokemon(46)
getPokemon(72)


let promises = [];
for (let i = 0; i < 3; i++) {
    promises[i] = fetch("https://pokeapi.co/api/v2/pokemon/" + (Math.round(Math.random() * 100)));
}
​
promises.forEach(promise => {
    promise.then(res => res.json())
    .then(data => {
        let imagen = data.sprites.front_default;
        let body = document.getElementsByTagName("body")[0];
        let img = document.createElement("img");
        img.setAttribute("src", imagen);
        body.appendChild(img);
    })
});


//GENERA UN ARRAY...(sacar solo una promesa)
let promesas = [];
for (let i = 0; i < 10; i++) {
    promesas[i] = fetch("https://pokeapi.co/api/v2/pokemon/" + (Math.round(Math.random() * 100)));
}
console.log(promesas);
Promise.race(promesas.splice(0, 3))
    .then(res => res.json())
    .then(data => {
        let imagen = data.sprites.front_default;
        let body = document.getElementsByTagName('body')[0];
        let img = document.createElement('img');
        img.setAttribute('src', imagen);
        body.appendChild(img);
    });

//CAMBIA UNO DE LOS ELEMENTOS(Recibir un string y manejar el error)
let promises = [];
let arr = [66, 46, 72] //caso normal
//let arr = [66, 46, 'string'] //caso con string

for (let i = 0; i < 3; i++) {
    var numero = arr[i]
    promises[i] = fetch('https://pokeapi.co/api/v2/pokemon/' + numero)
}

console.log(promises)

promises.forEach(promise => {
    promise.then(res => res.json())
    .then(data => {
        let imagen = data.sprites.front_default;
        let img = document.createElement("img");
        img.setAttribute = 'src'
        img.src = imagen
        contenedor.appendChild(img);
    }).catch(error => {
        error = 'es un string'
        console.error(error);
    });
});


//GENERA INTERFAZ

let promises = [];
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')

let button = document.querySelector('button')
let valores = []

button.addEventListener('click', () => {
    valores.push(input1.value, input2.value, input3.value)
    var numero = valores[0]
    var numero2 = valores[1]
    var numero3 = valores[2]
    setTimeout(() => {
        returnPromise(numero)
    }, 5000);
    setTimeout(() => {
        returnPromise(numero2)
    }, 3000);setTimeout(() => {
        returnPromise(numero3)
    }, 1000);

    for (let i = 0; i < valores.length; i++) {
        var valoresI = valores[i]
        id(valoresI)
    }
})

function id(valoresI) {
    if (valoresI == '' || isNaN(valoresI)) {
        alert('No es valido lo que pusiste, intenta de nuevo')
    } else {
        console.log('es valido')
    }
}

function returnPromise(numero) {
    promises = fetch('https://pokeapi.co/api/v2/pokemon/' + numero)
    promises.then(res => res.json())
        .then(data => {
            console.log(data.id)
        })
}*/