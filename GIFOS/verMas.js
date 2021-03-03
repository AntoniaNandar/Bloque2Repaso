/*const IMAGENES = [
    "https://i.blogs.es/202202/cascadas/1366_2000.jpeg", 
    "https://i.pinimg.com/474x/1f/78/7a/1f787aea1ef4b5a5484cc469ff429daa.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGDQ_Abj5eCcSWWttI-TZHTh6iO_M-IjaFA&usqp=CAU"

];

let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');

//Funcion que cambia la foto en la siguiente posicion
function pasarFoto() {
    if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

// Funcion que cambia la foto en la anterior posicion
function retrocederFoto() {
    if (posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

// Funcion que actualiza la imagen de imagen dependiendo de posicionActual
function renderizarImagen() {
    $imagen.src = IMAGENES[posicionActual];
}
// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
// Iniciar
renderizarImagen();
//}*/




/*const IMAGENES = [
    "https://i.blogs.es/202202/cascadas/1366_2000.jpeg", 
    "https://i.pinimg.com/474x/1f/78/7a/1f787aea1ef4b5a5484cc469ff429daa.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGDQ_Abj5eCcSWWttI-TZHTh6iO_M-IjaFA&usqp=CAU"

];*/

var IMAGENES = []

//console.log(IMAGENES)

function getTrendingText() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&limit=3&rating=g')
        .then(response => response.json())
        .then(json => json.data)
        .then(data => data.map(i => i.images.original.url))
        .then(url => {
            //console.log(url)
            //IMAGENES.push(url[0])
            get(url)

            /*for (let i = 0; i < url.length; i++) {
                //IMAGENES.push(url)
                console.log(url[i]) 
                IMAGENES.push(url[0])
            }*/
        })
        .catch(console.error)
}
getTrendingText()
console.log(IMAGENES)

function get(url){
    console.log(url)
    url = IMAGENES
}

/*let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');

//Funcion que cambia la foto en la siguiente posicion
function pasarFoto() {
    if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

// Funcion que cambia la foto en la anterior posicion
function retrocederFoto() {
    if (posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

/*function getTrending() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&limit=3&rating=g')
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            let url = data.map(i => i.images.original.url) 
        }).catch(console.error)
}

// Funcion que actualiza la imagen de imagen dependiendo de posicionActual
function renderizarImagen(callback) {
    $imagen.src = IMAGENES[posicionActual];

}
// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
// Iniciar
renderizarImagen();
//}*/