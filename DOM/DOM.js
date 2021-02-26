/*
//CHALLENGE
var parrafo = document.querySelector('main p')
parrafo.innerHTML = 'Cualquier cosa'

//CLASE
var mainP = document.getElementsByClassName('mainP img')
var arr = Array.from(mainP)
console.log(arr[0])//Convierte mainP en array y asi se puede acceder a los elementos por su indice (despues servira para modificar unos unicamente)

var logo = document.getElementById('logoPrincipal')
console.log(logo.attributes)
console.log(logo.attributes[1])

console.log(logo.classList)//devuelve las clases como especie de array
console.log(logo.className)//devuelve las clases como string

logo.classList.add('big') //Agrega nueva clase a los elementos HTML

var item1 = document.getElementById('item1')
item1.id = 'newId'

let input = document.querySelector('input')
input.value = 'nuevo valor'
input.name = 'inputImportante'

let lista = document.querySelector('ul')
lista.firstElementChild.innerHTML = 'Primer item' //El DOM en las listas y con elementos hijos
console.log(lista.childNodes)
logo.setAttribute('src', 'img') //coloca nuevo atributo y valor de ese atributo

let nuevo = document.createElement('p')//crear tag sin insertarlo en nungin lugar
nuevo.textContent = 'primer parrafo'
logo.appendChild(nuevo)//agrega hijo

let nuevo2 = document.createElement('p')
nuevo2.textContent = 'segundo parrafo'
nuevo.before(nuevo2)
//tambien existe inserbefore que controla ellugar especifico en donde va a aparecer

localStorage.setItem('nombre', 'antonia')
localStorage.setItem('apellido', 'nandar')
localStorage.removeItem('apellido')
//localStorage.removeItem('nombre')
//localStorage.clear()
console.log('el nombre guardado en el local es :' + localStorage.getItem('nombre'))

sessionStorage.setItem('nombres', 'Daniel Santiago')
*/
//PROGRAMAMOS
/*
let div = document.getElementById('divModificado')
div.innerHTML = prompt('Ingresa nombre y apellido')
div.style.background = prompt('Ingresa un color para el fondo')
div.style.font = prompt('Ingresa un color para la letra')
div.style.fontSize = prompt('Ingresa tamano para la letra')*/

/*
//AGREGAR ITEM
let ul = document.querySelector('ul')
let nuevo = document.createElement('li')
nuevo.textContent = 'item5'
ul.appendChild(nuevo)

//AGREGAR NEGRITA
let span = document.querySelector('p span')
span.style.fontWeight = 'bold'

//INVERTIR ORDEN
let contenedor = document.getElementById('contenedor')
var primero = contenedor.firstElementChild
primero.before(contenedor.lastElementChild)

*/
/*
let elementoAnimado = document.querySelector('.animado');
let animacion = (src) => {
        elementoAnimado.src = src
}

var intervalID2 = window.setInterval(animacion, 3000, 'https://i.blogs.es/8f3126/playas/840_560.jpeg');
var intervalID3 = window.setInterval(animacion, 6000, 'http://www.hdfondos.org/file/27467/728x410/16:9/puesta-del-sol-playa_341237370.jpg');
*/
/*var start = 1;
function a() {
    //this method will apply time interval for 1 second.   
    setTnterval(imageShow, 1000);
}

function imageShow() {
    console.log('Anto')
    var imageData
    if (start == 1) {
        imageData = 'https://i.blogs.es/8f3126/playas/840_560.jpeg';
    } else if (start == 2) {
        imageData = "'http://www.hdfondos.org/file/27467/728x410/16:9/puesta-del-sol-playa_341237370.jpg'";
    } else if (start == 3) {
        imageData = "https://lh3.googleusercontent.com/proxy/kuwWzM8ud1fleO-Y9chpCVeo0VlsLuR9K3UQJcYzmzMDQHAgHJz9XzOJOib0EjXjy292oECOe8HzVEncLmQw8aSWicBUFincpHvtraZKOnO4l1ujZuucJu19HovPfVUHQWvwERtIOJhGQ_tR_bFq9A";
    } else {
        start = 1;
    }
    document.querySelector(".animado").src = "" + image_data;
    start++;
}*/



/*
//EVENTOOOOOS
let logo = document.getElementById('logoPrincipal')

//colocar borde cambiando estilos desde js 
logo.addEventListener('mouseover', () => {
    logo.style.border = '5px solid black';
})
logo.addEventListener('mouseout', () => {
    logo.style.border = 'none'
})
//Colocar borde poniendo y colocando clase
logo.addEventListener('mouseover', () => {
    logo.classList.toggle('logoBorder')
})
logo.addEventListener('mouseout', () => {
    logo.classList.remove('logoBorder')
})

let h1 = document.querySelector('h1')
h1.addEventListener('click', agregarTitulo)


//Remplazar tiutlo
function agregarTitulo() {
    var nuevoTitulo = prompt('Ingresa nuevo titulo')
    localStorage.setItem('titulo', nuevoTitulo)
    h1.innerHTML = localStorage.getItem('titulo')
}
h1.innerHTML = localStorage.getItem('titulo')

//vermas
var footer = document.querySelector('.footer') 
var cajas = document.getElementsByClassName('oculto')

footer.addEventListener('click', ()=> {
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].classList.remove('vermas')
    }
})
*/