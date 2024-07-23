"use strict";
console.log("hello");

//Despliege nav movil///////////////////////////////////////
////////////////////////////////////////////////////////////
const botonNavMovil = document.querySelector(".boton-menu-movil");
const botonCruzMovil = document.querySelector(".boton-cruz-movil");
const contenedorNavMovil = document.querySelector(".lista-nav-movil");
botonNavMovil.addEventListener("click", function () {
  contenedorNavMovil.classList.toggle("despliegue-lista-nav-movil");
});

botonCruzMovil.addEventListener("click", function () {
  contenedorNavMovil.classList.remove("despliegue-lista-nav-movil");
});

console.log("bye");
