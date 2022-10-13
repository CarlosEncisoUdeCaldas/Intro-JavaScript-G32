function insertText(){
    document.getElementById("demo1").innerHTML = "Texto insertado desde un script";
}

//funciones para cambiar el texto del id demo
// function cambiarTexto(){
//     document.getElementById('demo').innerHTML = 'Texto cambiado con JS';
// }

// function volverTexto(){
//     document.getElementById('demo').innerHTML = 'Texto que se va a cambiar con JavaScript';
// }

//funcion mejorada con un parametro
function changeText(texto) {
  document.getElementById("demo").innerHTML = texto;
}

//fin de las funciones para cambiar y/o volver al texto original del id demo

// funciones para apagar y encender un bombillo
// function prender() {
//     document.getElementById('OnOff').src = 'img/on.gif';
// }

// function apagar(){
//     document.getElementById('OnOff').src = 'img/off.gif';
// }
// fin de funciones OnOff

//funcion optimizada con parametros para el ejercicio de encender y apagar bombillo
function OnOff(texto) {
  document.getElementById("OnOff").src = texto;
}

// funciones para cambiar el estilo de una etiqueta
function cambiarEstilo() {
  document.getElementById("estilo").style.fontSize = "35px";
}

function volverEstilo() {
  document.getElementById("estilo").style.fontSize = "";
}
// fin de las funciones para cambiar estilo de una etiqueta

//funciones para ocultar o mostrar elementos
function ocultarImagen() {
  document.getElementById("ocultar-mostrar").style.display = "none";
}

function mostrarImagen() {
  document.getElementById("ocultar-mostrar").style.display = "block";
}

//la misma funcion mostrarImagen pero tipo flecha
// mostrarImagen = () => document.getElementById("ocultar-mostrar").style.display = "block"; 

// function saludo () {
//     console.log("hola mundo")
// };
// saludo();

// fin de las funciones para ocultar o mostrar elementos HTML
