const contenedor = document.querySelector('#contenedor');
const favoritos = document.getElementById('favoritos')
var a = [];

function getTrendingText() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&limit=4&rating=g')
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (img of data) {
                let id = img.id
                let url = img.images.original.url
                let gif = document.createElement('img')
                gif.setAttribute = 'src'
                gif.src = url
                gif.setAttribute = 'id'
                gif.id = id
                contenedor.appendChild(gif)
                gif.addEventListener('click', select)
                var getName = localStorage.getItem(id)
                //Si hay info en el localStorages pintarla en el DOM
                if(getName !== null){
                    crearFav(getName)
                }
            }
        })
        .catch(console.error)
}
getTrendingText()

function select(event) {
    var url = event.target.src
    var id = event.target.id
    localStorage.setItem(id, url)
    var getName = localStorage.getItem(id)
    crearFav(getName)
}

function crearFav(getName) {
    let gifFav = document.createElement('img')
    gifFav.setAttribute = 'src'
    gifFav.src = getName
    favoritos.appendChild(gifFav)
}
