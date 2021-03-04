/*let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');

$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);

// Funcion que actualiza gif dependiendo de # posicionActual
function getTrendingText() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&limit=3&rating=g')
        .then(response => response.json())
        .then(json => json.data)
        .then(data => data.map(i => i.images.original.url))
        .then(url => {
            $imagen.src = url[posicionActual];
        })
        .catch(console.error)
}

//Funcion que cambia la foto en la siguiente posicion
function pasarFoto() {
    if (posicionActual >= 2) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    getTrendingText()
}

// Funcion que cambia la foto en la anterior posicion
function retrocederFoto() {
    if (posicionActual <= 0) {
        posicionActual = 2;
    } else {
        posicionActual--;
    }
    getTrendingText()
}

// Iniciar
getTrendingText()*/





//LO MISMO DE ARRIBA
let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');

$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);

// Funcion que actualiza gif dependiendo de # posicionActual
function getTrendingText() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&limit=3&rating=g')
        .then(response => response.json())
        .then(json => json.data)
        .then(data => data.map(i => i.images.original.url))
        .then(url => {
            $imagen.src = url[posicionActual];
        })
        .catch(console.error)
}

//Funcion que cambia la foto en la siguiente posicion
function pasarFoto() {
    if (posicionActual >= 2) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    getTrendingText()
}

// Funcion que cambia la foto en la anterior posicion
function retrocederFoto() {
    if (posicionActual <= 0) {
        posicionActual = 2;
    } else {
        posicionActual--;
    }
    getTrendingText()
}

// Iniciar
getTrendingText()