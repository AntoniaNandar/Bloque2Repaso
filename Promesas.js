/*
let mi_promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 5);
    if(number > 0){
        resolve((number % 2)? "es impar" : "es par");
    }else{
        reject("es cero")
    }
});

let nombres = ['Antonia', 'Daniel', 'Gorila', 'Matias', 1, 2, 3, 4]
let miPromesa2 = new Promise((resolve, reject) =>{
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i] === 'Antonia' || nombres[i] === 'Daniel' || nombres[i] === 'Gorila' || nombres[i] === 'Matias') {
            resolve(alert(`los nombres del array son: ${nombres[i]}`))
        } else {
            reject(alert(`estos no son nombres ${nombres[i]}`))
        }
    }
})

var inputBuscar = document.getElementById('inputBuscar');
var btnBuscar = document.getElementById('btnBuscar');
var contenedor = document.getElementById('contenedor')

btnBuscar.addEventListener('click',()=> {
    var value = inputBuscar.value
    console.log(value)
    getFollowes(value)
});


function getFollowes(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json =>{
            fetch(json.followers_url)
            .then(response => response.json())
            .then(json => json.splice(0,5))
            .then(json2 => {
                for (let i = 0; i < json2.length; i++) {
                    var followers = json2[i].login
                    //console.log(followers)
                    //alert(followers)
                    var newDiv = document.createElement('p')
                    newDiv.textContent = followers
                    contenedor.appendChild(newDiv)
                }  
            }) 
            .catch(error => {
                alert('este usuairo no existe 2');
                console.error(error)
            })
        })
        .catch(error => {
            console.error(error);
        });
}

getFollowes('alejandroarevalov')
*/