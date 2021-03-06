/*let items = document.getElementById('img')
let contenedor = document.getElementById('contenedor')
let contenedorP = document.getElementById('contenedorPadre')
let iconos = document.getElementById('iconos')

let section = document.querySelector('section')

let fav = document.getElementById('fav')
let download = document.getElementById('download')
let max = document.getElementById('max')

//MOUSEOVER
contenedorP.addEventListener('mouseover', hover)

function hover() {
    items.classList.add('hover')
    iconos.classList.add('hoverIconos')
    //Crear parrafos
    let user = document.createElement('p')
    let titulo = document.createElement('p')
    user.textContent = 'User Name'
    titulo.textContent = 'Titulo Gif'
    user.classList.add('pHover')
    iconos.appendChild(user)
    iconos.appendChild(titulo)
    iconos.classList.remove('remove')
}

//MOUSEOUT
contenedorP.addEventListener('mouseout', removeHover)
function removeHover() {
    items.classList.remove('hover')
    var p = document.querySelectorAll('#iconos > p')
    for (let i = 0; i < p.length; i++) {
        iconos.removeChild(p[i])
    }
    iconos.classList.add('remove')
}

let urlIcono = '/img/close.svg'

max.addEventListener('click', () => {
    items.style.transform = 'scale(1.2)'
    items.style.position = 'absolute'
    iconos.classList.add('remove')
    items.classList.remove('hover')
    contenedorP.removeEventListener('mouseover', hover)
    contenedorP.addEventListener('mouseout', removeHover)
    console.log('a')

    //Agregat icono de eliminar 
    let img = document.createElement('img')
    img.setAttribute = 'src'
    img.src = urlIcono
    img.style.position= 'absolute'
    contenedorP.appendChild(img)
})*/

let items = document.getElementById('img')
let contenedor = document.getElementById('contenedor')
let contenedorP = document.getElementById('contenedorPadre')
let iconos = document.getElementById('iconos')

let section = document.querySelector('section')

let fav = document.getElementById('fav')
let download = document.getElementById('download')
let max = document.getElementById('max')



//MOUSEOVER
contenedorP.addEventListener('mouseover', hover)

function hover() {
    items.classList.add('hover')
    iconos.classList.add('hoverIconos')
    iconos.classList.remove('remove')
    //Agregar parrafos
    let user = document.createElement('p')
    let titulo = document.createElement('p')
    user.textContent = 'User Name'
    titulo.textContent = 'Titulo Gif'
    user.classList.add('pHover')
    iconos.appendChild(user)
    iconos.appendChild(titulo)
}

//MOUSEOUT
contenedorP.addEventListener('mouseout', removeHover)

function removeHover() {
    items.classList.remove('hover')
    var p = document.querySelectorAll('#iconos > p')
    for (let i = 0; i < p.length; i++) {
        iconos.removeChild(p[i])
    }
    iconos.classList.add('remove')
}

let urlIcono = '/img/close.svg'

max.addEventListener('click', () => {
    items.classList.add('imgMax')
    //Quita evento de la primera
    iconos.classList.add('remove')
    items.classList.remove('hover')
    contenedorP.removeEventListener('mouseover', hover)
    contenedorP.addEventListener('mouseout', removeHover)
    //Agregat icono de eliminar 
    let iconoCerrar = document.createElement('img')
    iconoCerrar.setAttribute('src', urlIcono);
    iconoCerrar.classList.add('iconoCerrar')
    contenedorP.appendChild(iconoCerrar)
    contenedorP.appendChild(fav)
    contenedorP.appendChild(download)
    fav.style.margin = '1em 0 0 36em'
})

function gifs() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&limit=3&rating=g')
        .then(response => response.json())
        .then(json => {
            console.log(json.data)
            return json.data
        })
        .then(data => {
            for (img of data) {
                let url = img.images.original.url
                let gif = document.createElement('img')
                gif.setAttribute('src', url)
                contenedor.appendChild(gif)
                //img.addEventListener('click', get)
            }
        }).catch(console.error);
}
gifs()

/*function get (){

}*/









//TENDENCIAS DE BUSQUEDA 
/*function a(){
    fetch(`https://api.giphy.com/v1/trending/searches?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le`)
    .then(response => response.json())
    .then(json => json.data)
    .then(info => { 
        let nuevoText = info.splice(0, 5)
        for (text of nuevoText) {  
            let texto = document.createElement('p')
            texto.textContent = text
            contenedor.appendChild(texto)
        }
    }).catch(console.error);
}
a()*/