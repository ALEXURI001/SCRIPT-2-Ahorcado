
let palabras = ["ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

//palabraSecreta 

function escogerPalabraSecret(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

//Iniciar el juego
function btnIniciar(){
    document.getElementById("iniciar").style.display="none";
    document.getElementById("agregar-palabra").style.display="none";
    escogerPalabraSecret();
    dibujarcanvas();
    dibujar();
}

