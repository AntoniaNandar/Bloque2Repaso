//CAMBIAR IMAGEN CON UNA SOLA IMAGEN
/*var imagen = document.getElementById('imagen')
var src = imagen.getAttribute('src')
//console.log(src)
var arrayImagenes = [src, "https://image.freepik.com/vector-gratis/fondo-pantalla-movil-cielo-acuarela_79603-597.jpg", "https://i.pinimg.com/474x/1f/78/7a/1f787aea1ef4b5a5484cc469ff429daa.jpg", "https://img.freepik.com/vector-gratis/concepto-fondo-pantalla-hojas-tropicales_23-2148537116.jpg?size=626&ext=jpg"]

//que imagen mostramos
var imagenActual = 0;

//paso 2: listeners de los botones de anterior y siguiente
document.getElementById("anterior").addEventListener("click", cambiarImagen);
document.getElementById("siguiente").addEventListener("click", cambiarImagen);
function cambiarImagen(){
    var boton = this.id;
    if(boton == 'anterior') {
        imagenActual--;
        if (imagenActual < 0) {
            //imagenActual = arrayImagenes.length - 1;
            imagenActual = arrayImagenes.length -1
        }
    } else {
        imagenActual++;
        if(imagenActual > arrayImagenes.length -1) {
            imagenActual = 0
        }
    }
    var imagenAMostrar = arrayImagenes[imagenActual];
    imagen.src = imagenAMostrar;
}*/

//CAMBIAR IMAGENES CON 3 IMAGNES 
var imagen = document.getElementById('imagen')
var imagen2 = document.getElementById('imagen2')
var imagen3 = document.getElementById('imagen3')
var src = imagen.getAttribute('src')
var src2 = imagen2.getAttribute('src')
var src3 = imagen3.getAttribute('src')


var imagenes = document.getElementsByClassName('img')
for (let i = 0; i < imagenes.length; i++) {
    var imgSrc = imagenes[i].getAttribute('src') 
}

var arrayImagenes = [src, src2, src3, "https://image.freepik.com/vector-gratis/fondo-pantalla-movil-cielo-acuarela_79603-597.jpg", "https://i.pinimg.com/474x/1f/78/7a/1f787aea1ef4b5a5484cc469ff429daa.jpg", "https://img.freepik.com/vector-gratis/concepto-fondo-pantalla-hojas-tropicales_23-2148537116.jpg?size=626&ext=jpg"]
//var arrayImagenes = [1,2,3,4,5,6]
console.log(arrayImagenes)

//que imagen mostramos
var imagenActual = 0;
var imagenActual2 = 0;
var imagenActual3 = 0;

//paso 2: listeners de los botones de anterior y siguiente
document.getElementById("anterior").addEventListener("click", cambiarImagen);
document.getElementById("siguiente").addEventListener("click", cambiarImagen);

function cambiarImagen(){
    var boton = this.id;
    if(boton == 'anterior') {
        imagenActual--;
        if (imagenActual < 0) {
            imagenActual = arrayImagenes.length -3
        }
    } else {
        imagenActual++;
        if(imagenActual > arrayImagenes.length -3) {
            imagenActual = 0
        }
    }
    var imagenAMostrar = arrayImagenes[imagenActual];
    var imagenAMostrar2 = arrayImagenes[imagenActual + 1];
    var imagenAMostrar3 = arrayImagenes[imagenActual + 2];

    //console.log(imagenAMostrar)
    //console.log(imagenAMostrar2)
    //console.log(imagenAMostrar3)


    imagen.src = imagenAMostrar;
    imagen2.src = imagenAMostrar2;
    imagen3.src = imagenAMostrar3;
    //
    /*for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenAMostrar,
    }*/
}
