/*let inputSearch = document.getElementById('inputSearch')
let buttonSearch = document.getElementById('buttonSearch')
let contenedor = document.getElementById('contenedor')
let contenedorBuscador = document.getElementById('contenedorBuscador')
let ul = document.querySelector('ul')

//BUSCADOR DE GIFS
buttonSearch.addEventListener('click', buscar)
function buscar() {
    let value = inputSearch.value
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&q=${value}&limit=5&offset=0&rating=g&lang=en`)
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
}

//AUTOCOMPLETE DEL BUSCADOR

inputSearch.addEventListener('input', autocomplete)

function autocomplete() {
    let inputValue = inputSearch.value
    ul.innerHTML = ''
    fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&q=${inputValue}&limit=5&offset=0`)
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (names of data) {
                let li = document.createElement('li')
                li.innerHTML = names.name
                ul.appendChild(lii)   
            }
            if (inputValue === '') {
                ul.innerHTML = '';  
              }
        })
}*/