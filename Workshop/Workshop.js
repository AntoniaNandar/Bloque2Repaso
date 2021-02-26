class Articulo {
    estadoCarrito = 'Anadir acarrito'
    estadoCompra = 'Comprar'
    constructor(nombre, precio, src) {
        this.nombre = nombre;
        this.precio = precio;
        this.src = src;
    }
    getterCarrito() {
        return this.estadoCarrito
    }
    getterCompra() {
        return this.estadoCompra
    }
}

let articulos = [new Articulo('Nike', '$30000', 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/calzado-air-max-270-qVk0Vw.jpg'),
    new Articulo('Adiddas', '$4000', 'https://assets.adidas.com/images/w_600,f_auto,q_auto/8c687d94b5654d4bb435a97f00d5a475_9366/Tenis_Grand_Court_Blanco_F36392_01_standard.jpg'),
    new Articulo('Puma', '$20000', 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/373384/01/sv01/fnd/PNA/fmt/png/Future-Rider-WH-Sneakers'),
    new Articulo('New Balance', '$80000', 'https://freeportstore.vteximg.com.br/arquivos/ids/2187587-1000-1000/thdn078.jpg?v=637414784863630000'),
    new Articulo('Rebook', '$90000', 'https://assets.reebok.com/images/w_600,f_auto,q_auto/336f1fe03acf4c61b02fabb101757655_9366/Classic_Legacy_Blanco_FY7432_01_standard.jpg')
]

var ul = document.getElementById('lista')
var listaCarrito = document.getElementById('listaCarrito')
//var li = document.querySelector('#listaCarrito li')

for (let i = 0; i < articulos.length; i++) {
    //Seleccionar atributos de los objetos
    var nombre = articulos[i].nombre
    var precio = articulos[i].precio
    var src = articulos[i].src
    var carrito = articulos[i].getterCarrito()
    var a

    var crearrticulo = (nombre, precio, src, ul, a = true) => {
        //Crear nuevos nodos en DOM
        let nuevoLi = document.createElement('li')
        let nuevoH2 = document.createElement('h2')
        let nuevoP = document.createElement('p')
        let nuevaImg = document.createElement('img')
        let nuevoCarrito = document.createElement('button')
        //Pintar los nodos para poder insertarlos
        nuevoH2.innerHTML = nombre
        nuevoP.innerHTML = precio
        nuevaImg.setAttribute = 'src'
        nuevaImg.src = src
        //nuevoCarrito.classList.add('carritoBtn')
        nuevoCarrito.innerHTML = carrito
        //Agregar al DOM
        ul.appendChild(nuevoLi)
        nuevoLi.appendChild(nuevaImg)
        nuevoLi.appendChild(nuevoH2)
        nuevoLi.appendChild(nuevoP)
        nuevoLi.appendChild(nuevoCarrito)
        //nuevoLi.appendChild(nuevaCompra)

        /*nuevoCarrito.addEventListener('click', (event) => {
            localStorage.setItem(`ArticuloNombre${[i]}`, articulos[i].nombre)
            var getNombre = localStorage.getItem(`ArticuloNombre${[i]}`)
            localStorage.setItem(`ArticuloPrecio${[i]}`, articulos[i].precio)
            var getPrecio = localStorage.getItem(`ArticuloPrecio${[i]}`)
            localStorage.setItem(`ArticuloImg${[i]}`, articulos[i].src)
            var getImg = localStorage.getItem(`ArticuloImg${[i]}`)

            crearrticulo(getNombre, getPrecio, getImg, listaCarrito)

            eliminar()
            //borrar boton anadir carrito
            //borrar()
            //borrar aviso 'nose ha anadido aun'
            borrarLi()
        })*/

        if (a) {
            nuevoCarrito.addEventListener('click', agregarnuevo)

            function agregarnuevo() {
                localStorage.setItem(`ArticuloNombre${[i]}`, articulos[i].nombre)
                var getNombre = localStorage.getItem(`ArticuloNombre${[i]}`)
                localStorage.setItem(`ArticuloPrecio${[i]}`, articulos[i].precio)
                var getPrecio = localStorage.getItem(`ArticuloPrecio${[i]}`)
                localStorage.setItem(`ArticuloImg${[i]}`, articulos[i].src)
                var getImg = localStorage.getItem(`ArticuloImg${[i]}`)

                crearrticulo(getNombre, getPrecio, getImg, listaCarrito, a = false)


                //var newButton = document.querySelectorAll('#listaCarrito button')
                nuevoCarrito.removeEventListener('click', agregarnuevo)

                //newCarrito = nuevoCarrito
                //newCarrito.addEventListener('click', estesies)

                //function estesies() {
                // console.log('you did again')
                //}

                /*if(newButton[b].addEventListener = true){
                    var este = i
                    console.log(este)
                }*/

                //console.log(getNombre)

                /*for (let b = 0; b < newButton.length; b++) {
                    newButton[b].innerHTML = 'Eliminar del carrito'
                    newButton[b].addEventListener('click', () => {
                        console.log(getNombre)
                    })
                }*/
                eliminar()



                //borrar boton anadir carrito
                //borrar()
                //borrar aviso 'nose ha anadido aun'
                borrarLi()
            }

        } //else(eliminar())



        function eliminar() {
            var a = i
            console.log(a)
            //console.log([i])   

            var newButton = document.querySelectorAll('#listaCarrito button')
            nuevoCarrito.removeEventListener('click', agregarnuevo)
            for (let b = 0; b < newButton.length; b++) {
                newButton[b].innerHTML = 'Eliminar del carrito'
            }
        }
        
    }
    crearrticulo(nombre, precio, src, ul, a = true)
}

//console.log(listaCarrito.children)
for (let i = 0; i < articulos.length; i++) {
    var getNombre = localStorage.getItem(`ArticuloNombre${i}`)
    var getPrecio = localStorage.getItem(`ArticuloPrecio${i}`)
    var getImg = localStorage.getItem(`ArticuloImg${i}`)
    if (getNombre != null && getPrecio != null && getImg != null) {
        crearrticulo(getNombre, getPrecio, getImg, listaCarrito, a = false)
        borrarLi()
    }
}

function borrarLi() {
    var liCarrito = document.querySelector('.liCarrito')
    liCarrito.classList.add('remove')
}

/*function borrar() {
    var newButton = document.querySelectorAll('#listaCarrito button')
    for (let b = 0; b < newButton.length; b++) {
        newButton[b].classList.add('remove')
    }
}*/

//COMPRA
var btnCompra = document.querySelector('.compra')
var formulario = document.getElementById('formulario')

btnCompra.addEventListener('click', () => {
    formulario.style.display = 'block'
})

let compraRealizada = document.getElementById('compraRealizada')
compraRealizada.addEventListener('click', () => {
    alert('Compra exitosa !')
    localStorage.clear()
})

//localStorage.clear()
/*var eliminarCarrito = 'Eliminar de carrito'
            let nuevoCarrito2 = document.createElement('button')
            nuevoCarrito2.innerHTML = eliminarCarrito
            li.appendChild(nuevoCarrito2)*/