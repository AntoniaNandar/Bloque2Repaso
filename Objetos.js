/*
let personas = [{
    nombre: "Jhony",
    asistente: null,
    seccion: "gold",
    rol: "speaker"
  },
  {
    nombre: "Manuel",
    asistente: true,
    seccion: "vip",
    rol: "viewer"
  },
  {
    nombre: "Fran",
    asistente: true,
    seccion: "vip",
    rol: "viewer"
  },
  {
    nombre: "Cintia",
    seccion: "platino",
    rol: "viewer"
  },
  {
    nombre: "Marcos",
    asistente: null,
    seccion: "gold",
    rol: "viewer"
  },
  {
    nombre: "Victoria",
    asistente: true,
    seccion: "platino",
    rol: "speaker"
  }
];

arrayasistentes = []

function asistentes(listaPersonas) {
  var conteo = 0;
  for (let i = 0; i < listaPersonas.length; i++) {
    if (listaPersonas[i].asistente === true) {
      conteo++;
      arrayasistentes.push(listaPersonas[i].nombre)
    } 
  }
  return conteo
}

let totalAsistentes = asistentes(personas);
console.log(totalAsistentes); 

console.log(arrayasistentes)


//PORGRAMAMOS
class Persona {
  constructor (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  fullname() {
    return `${this.nombre}  ${this.apellido}`
  }
  es_mayor() {
    return this.edad >= 18
  }
}

let listaPersonas = [];
listaPersonas.push(persona1);
let persona1 = new Persona('Antonia', 'Nandar', 18);

console.log(listaPersonas);
console.log(persona1.fullname());
console.log(persona1.es_mayor());

//PROGRAMAMOS
class Perro {
  estadoAdopcion = 'En adopcion';
  constructor(nombre, edad, raza, tamano) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.tamano = tamano;
  }
  settEstado(estadoIngresado){
    return this.estadoAdopcion = estadoIngresado;
  }
  gettEstado() {
    return this.estadoAdopcion;
  }
}
//Ingresar estado adopcion
var estadoIngresado = prompt('Ingrese el estado de adopcion del perro');

let perro1 = new Perro ('Baxter', 3, 'Pitbull', 'Mediano')

//Modificar estado de adopcion (Set)
perro1.settEstado(estadoIngresado)

//Mostrar objeto e informar estado de adopcion (Get)
console.log(perro1)
console.log(perro1.gettEstado())

class Perro {
  constructor(nombre, edad, raza, estado) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.estado = estado;
  }
  crearNuevo() {
    this.nombre = prompt('Ingrese nombre')
    this.raza = prompt('Ingrese raza')
    this.edad = prompt('Ingrese edad')
    this.estado = prompt('Ingrese estado de adopcion')
  }
}

const arrayPerros = [];
const adoptados = [];
const procesoAdoptados = [];
const enAdopcion = [];

crearPerroNuevo()
function crearPerroNuevo(){
  var nuevo = new Perro
  nuevo.crearNuevo()
  arrayPerros.push(nuevo)
}

while (window.confirm('Deseas agregar otro perro ?') === true) {
  confirm(crearPerroNuevo())
} 

arrayPerros.forEach(element => {
  if(element.estado === 'Adoptado') {
    adoptados.push(element)
  } else if (element.estado === 'En proceso de adopcion') {
    procesoAdoptados.push(element)
  } else if( element.estado === 'En adopcion') {
    enAdopcion.push(element)
  } else {
    console.error('Ingresaste mal el estado de adopcion')
  }
});

console.log(arrayPerros)
console.log(adoptados)
console.log(procesoAdoptados)
console.log(enAdopcion) 
*/