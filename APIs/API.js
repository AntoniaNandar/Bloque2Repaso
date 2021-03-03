let inputSearch = document.getElementById('inputSearch')
let buttonSearch = document.getElementById('buttonSearch')
let contenedor = document.getElementById('contenedor')
let contenedorBuscador = document.getElementById('contenedorBuscador')
let ul = document.querySelector('ul')
let search = document.getElementById('search')
let vermas = document.getElementById('verMas')

buttonSearch.addEventListener('click', buscar)
vermas.addEventListener('click', vermass)
inputSearch.addEventListener('keyup', autocomplete)

//Ver mas (pasar de 12 en 12 gif, hasta llegar a 48)
let numero = 12
function vermass() {
    contenedor.innerHTML = ''
    numero = numero + 12
    if (numero > 48) {
        numero = 12
    }
    buscar(numero)
}

//Activar la busqueda del gif y mostrarlos en pantalla
function buscar() {
    let value = inputSearch.value
    ul.classList.add('remove')
    contenedor.innerHTML = ''
    vermas.removeAttribute('class')
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&q=${value}&limit=${numero}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (img of data) {
                let url = img.images.original.url
                let gif = document.createElement('img')
                gif.setAttribute = 'src'
                gif.src = url
                contenedor.appendChild(gif)
            }
        }).catch(console.error);
    if (value === value) {
        console.log('repetido')
    }
}

//AUTOCOMPLETE DEL BUSCADOR
function autocomplete(event) {
    let inputValue = inputSearch.value
    ul.innerHTML = ''
    fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&q=${inputValue}&limit=5&offset=0`)
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (names of data) {
                let li = document.createElement('li')
                li.innerHTML = names.name
                ul.appendChild(li)
            }
        })
    if (inputValue === '') {
        ul.innerHTML = '';
    }
    if (event.key === 'Enter') {
        buscar()
        ul.classList.add('remove')
        contenedor.innerHTML = ''
    }
}