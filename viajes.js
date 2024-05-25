import { barcelona, roma, paris, londres } from './ciudades.js';

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

enlaces.forEach(function (enlace) {

    //Agrega evento de click a cada uno de los enlaces (barcelona, roma, paris, londres)
    enlace.addEventListener('click', function(){

        //Remueve todas las clases "active" de los enlace (barcelona, roma, paris, londres)
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })

        //Agrega la clase "active" al enlace (barcelona, roma, paris, londres)
        //donde 'this' es 'enlace'
        this.classList.add('active')  
        

        //Le asignamos la funcion 'obtenerInformacion' que recibe como parametro el texto de
        //cada enlace
        let contenido = obtenerInformacion(this.textContent)


        //Muestra en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    });
})

//Obtener informacion de 'ciudades.js' mediante una funcion que tiene como parametro
//el enlace creado en el bucle forEach de arriba
function obtenerInformacion(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace];
}