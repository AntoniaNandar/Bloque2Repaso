/*var inputText = document.getElementById('inputText')
var buttonText = document.getElementById('buttonText')

var contenedor = document.getElementById('contenedor')

buttonText.addEventListener('click',valueVacio)
//inputText.addEventListener('change',repetir)
//inputText.addEventListener('click',repetir)
inputText.addEventListener('input',repetir)



function valueVacio() {
    var value = inputText.value
    if(value === ''){
        inputText.style.background = 'red'
    } else{
        alert(`Hola ${value} bienvenido/a`)
        //inputText.style.background = 'inherit'
    }
}
function repetir() {
    inputText.style.background = 'inherit'
    //inputText.style.border = '5px solid blue' //No se puede colocar dos acciones en un callback para pasar a addEventListener //GIFOS
}

/*if(value.style.background == 'red') {
    inputText.style.background = 'inherit'
}*/
/*
inputText.addEventListener('click',repetir)
contenedor.addEventListener('click', evento)

function evento(){
    contenedor.style.background = 'black'
}

function repetir(event) {
    inputText.style.background = 'red'
    event.stopPropagation()
}*/

//PROGRAMAMOS

/*var inputText = document.getElementById('inputText')
var buttonText = document.getElementById('buttonText')
var ul = document.querySelector('ul')

buttonText.addEventListener('click', valueVacio)

function valueVacio() {
    var value = inputText.value
    var li = document.createElement('li')
    li.textContent = value
    ul.appendChild(li)
}

inputText.addEventListener('keyup', (event)=> {
    if (event.key === 'Enter') {
        valueVacio()
    }
})*/
