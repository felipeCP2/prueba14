"use strict";

console.log("Hola");

//_____________________________________________________________________________________________
//AREAS DE EJERCICIO APP///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//_____________________________________________________________________________________________

// Lista de areas de ejercicio y sus explicaciones\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////

/**1°. Se declaran variables para seleccionar el lugar donde se hace click,
 * una por cada boton, que al hacer click, producirá un efecto.*/
const botonCivil = document.querySelector(".boton-civil");
const botonFamilia = document.querySelector(".boton-familia");
const botonLaboral = document.querySelector(".boton-laboral");
const botonComercial = document.querySelector(".boton-comercial");
const botonConsumidor = document.querySelector(".boton-consumidor");
const botonPenal = document.querySelector(".boton-penal");
const botonConstitucional = document.querySelector(".boton-constitucional");
const botonConcursal = document.querySelector(".boton-concursal");

/**Luego, declaramos una variable por cada clase en la que se espera
 * que se agregue o se quite la claser (de css) que permitirá la
 * aparición del elemento en el el archivo html*/
const selectorCivil = document.querySelector(".alma-civil");
const selectorFamilia = document.querySelector(".alma-familia");
const selectorLaboral = document.querySelector(".alma-laboral");
const selectorComercial = document.querySelector(".alma-comercial");
const selectorConsumidor = document.querySelector(".alma-consumidor");
const selectorPenal = document.querySelector(".alma-penal");
const selectorConstitucional = document.querySelector(".alma-constitucional");
const selectorConcursal = document.querySelector(".alma-concursal");

/**Luego, creamos una función remueva la clase "cuerpo, que será la que
 * permita la aparición del elemento en html"*/
function removedorTotal() {
  selectorCivil.classList.remove("cuerpo");
  selectorFamilia.classList.remove("cuerpo");
  selectorLaboral.classList.remove("cuerpo");
  selectorComercial.classList.remove("cuerpo");
  selectorConsumidor.classList.remove("cuerpo");
  selectorPenal.classList.remove("cuerpo");
  selectorConstitucional.classList.remove("cuerpo");
  selectorConcursal.classList.remove("cuerpo");
}

/**Finalmente, aplicamos una función predeterminada de JS, que al
 * producirse un evento determinado, despliegue un conjunto de código.
 * El evento consiste en un click en un boton determinado; los codigos
 * que se despliegan son dos: (1) la remoción de la clase cuerpo en todo
 * los elementos html en los que puede estar; (2) Agregar la clase cuerpo,
 * en la clase precisa donde se quiere seleccionar.*/
botonCivil.addEventListener("click", function () {
  removedorTotal();
  selectorCivil.classList.add("cuerpo");
});

botonFamilia.addEventListener("click", function () {
  removedorTotal();
  selectorFamilia.classList.add("cuerpo");
});
botonLaboral.addEventListener("click", function () {
  removedorTotal();
  selectorLaboral.classList.add("cuerpo");
});

botonComercial.addEventListener("click", function () {
  removedorTotal();
  selectorComercial.classList.add("cuerpo");
});
botonConsumidor.addEventListener("click", function () {
  removedorTotal();
  selectorConsumidor.classList.add("cuerpo");
});
botonPenal.addEventListener("click", function () {
  removedorTotal();
  selectorPenal.classList.add("cuerpo");
});
botonConstitucional.addEventListener("click", function () {
  removedorTotal();
  selectorConstitucional.classList.add("cuerpo");
});
botonConcursal.addEventListener("click", function () {
  removedorTotal();
  selectorConcursal.classList.add("cuerpo");
});

// Links del MAIN a sección SERVICIOS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////

const botonCivilMain = document.querySelector(".boton-civil-main");
const botonFamiliaMain = document.querySelector(".boton-familia-main");
const botonLaboralMain = document.querySelector(".boton-laboral-main");
const botonComercialMain = document.querySelector(".boton-comercial-main");
const botonConsumidorMain = document.querySelector(".boton-consumidor-main");
const botonPenalMain = document.querySelector(".boton-penal-main");
const botonConstitucionalMain = document.querySelector(
  ".boton-constitucional-main"
);
const botonConcursalMain = document.querySelector(".boton-concursal-main");
//funciones del link MAIN a SERVICIOS

botonCivilMain.addEventListener("click", function () {
  removedorTotal();
  selectorCivil.classList.add("cuerpo");
});

botonFamiliaMain.addEventListener("click", function () {
  removedorTotal();
  selectorFamilia.classList.add("cuerpo");
});

botonLaboralMain.addEventListener("click", function () {
  removedorTotal();
  selectorLaboral.classList.add("cuerpo");
});

botonComercialMain.addEventListener("click", function () {
  removedorTotal();
  selectorComercial.classList.add("cuerpo");
});
botonConsumidorMain.addEventListener("click", function () {
  removedorTotal();
  selectorConsumidor.classList.add("cuerpo");
});
botonPenalMain.addEventListener("click", function () {
  removedorTotal();
  selectorPenal.classList.add("cuerpo");
});
botonConstitucionalMain.addEventListener("click", function () {
  removedorTotal();
  selectorConstitucional.classList.add("cuerpo");
});
botonConcursalMain.addEventListener("click", function () {
  removedorTotal();
  selectorConcursal.classList.add("cuerpo");
});

// Acordeones \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////

/**const botonAcordeon1 = document.querySelector(".titular-acordeon1");
const contenidoAcordeon1 = document.querySelector(".contenido-acordeon1");
const flechaAcordeon1 = document.querySelector(".flecha-acordeon1");

botonAcordeon1.addEventListener("click", function () {
  contenidoAcordeon1.classList.toggle("despliegue-acordeon");
  flechaAcordeon1.classList.toggle("rotacion-flecha");
});*/

const botonAcordeon1 = document.querySelector(".titular-acordeon1");
const botonAcordeon2 = document.querySelector(".titular-acordeon2");
const botonAcordeon3 = document.querySelector(".titular-acordeon3");
const botonAcordeon4 = document.querySelector(".titular-acordeon4");
const botonAcordeon5 = document.querySelector(".titular-acordeon5");
const botonAcordeon6 = document.querySelector(".titular-acordeon6");
const botonAcordeon7 = document.querySelector(".titular-acordeon7");
const botonAcordeon8 = document.querySelector(".titular-acordeon8");
const botonAcordeon9 = document.querySelector(".titular-acordeon9");
const botonAcordeon10 = document.querySelector(".titular-acordeon10");
const botonAcordeon11 = document.querySelector(".titular-acordeon11");
const botonAcordeon12 = document.querySelector(".titular-acordeon12");
const botonAcordeon13 = document.querySelector(".titular-acordeon13");
const botonAcordeon14 = document.querySelector(".titular-acordeon14");
const botonAcordeon15 = document.querySelector(".titular-acordeon15");
const botonAcordeon16 = document.querySelector(".titular-acordeon16");
const botonAcordeon17 = document.querySelector(".titular-acordeon17");
const botonAcordeon18 = document.querySelector(".titular-acordeon18");
const botonAcordeon19 = document.querySelector(".titular-acordeon19");
const botonAcordeon20 = document.querySelector(".titular-acordeon20");
const botonAcordeon21 = document.querySelector(".titular-acordeon21");
const botonAcordeon22 = document.querySelector(".titular-acordeon22");
const botonAcordeon23 = document.querySelector(".titular-acordeon23");
const botonAcordeon24 = document.querySelector(".titular-acordeon24");

const contenidoAcordeon1 = document.querySelector(".contenido-acordeon1");
const contenidoAcordeon2 = document.querySelector(".contenido-acordeon2");
const contenidoAcordeon3 = document.querySelector(".contenido-acordeon3");
const contenidoAcordeon4 = document.querySelector(".contenido-acordeon4");
const contenidoAcordeon5 = document.querySelector(".contenido-acordeon5");
const contenidoAcordeon6 = document.querySelector(".contenido-acordeon6");
const contenidoAcordeon7 = document.querySelector(".contenido-acordeon7");
const contenidoAcordeon8 = document.querySelector(".contenido-acordeon8");
const contenidoAcordeon9 = document.querySelector(".contenido-acordeon9");
const contenidoAcordeon10 = document.querySelector(".contenido-acordeon10");
const contenidoAcordeon11 = document.querySelector(".contenido-acordeon11");
const contenidoAcordeon12 = document.querySelector(".contenido-acordeon12");
const contenidoAcordeon13 = document.querySelector(".contenido-acordeon13");
const contenidoAcordeon14 = document.querySelector(".contenido-acordeon14");
const contenidoAcordeon15 = document.querySelector(".contenido-acordeon15");
const contenidoAcordeon16 = document.querySelector(".contenido-acordeon16");
const contenidoAcordeon17 = document.querySelector(".contenido-acordeon17");
const contenidoAcordeon18 = document.querySelector(".contenido-acordeon18");
const contenidoAcordeon19 = document.querySelector(".contenido-acordeon19");
const contenidoAcordeon20 = document.querySelector(".contenido-acordeon20");
const contenidoAcordeon21 = document.querySelector(".contenido-acordeon21");
const contenidoAcordeon22 = document.querySelector(".contenido-acordeon22");
const contenidoAcordeon23 = document.querySelector(".contenido-acordeon23");
const contenidoAcordeon24 = document.querySelector(".contenido-acordeon24");

const flechaAcordeon1 = document.querySelector(".flecha-acordeon1");
const flechaAcordeon2 = document.querySelector(".flecha-acordeon2");
const flechaAcordeon3 = document.querySelector(".flecha-acordeon3");
const flechaAcordeon4 = document.querySelector(".flecha-acordeon4");
const flechaAcordeon5 = document.querySelector(".flecha-acordeon5");
const flechaAcordeon6 = document.querySelector(".flecha-acordeon6");
const flechaAcordeon7 = document.querySelector(".flecha-acordeon7");
const flechaAcordeon8 = document.querySelector(".flecha-acordeon8");
const flechaAcordeon9 = document.querySelector(".flecha-acordeon9");
const flechaAcordeon10 = document.querySelector(".flecha-acordeon10");
const flechaAcordeon11 = document.querySelector(".flecha-acordeon11");
const flechaAcordeon12 = document.querySelector(".flecha-acordeon12");
const flechaAcordeon13 = document.querySelector(".flecha-acordeon13");
const flechaAcordeon14 = document.querySelector(".flecha-acordeon14");
const flechaAcordeon15 = document.querySelector(".flecha-acordeon15");
const flechaAcordeon16 = document.querySelector(".flecha-acordeon16");
const flechaAcordeon17 = document.querySelector(".flecha-acordeon17");
const flechaAcordeon18 = document.querySelector(".flecha-acordeon18");
const flechaAcordeon19 = document.querySelector(".flecha-acordeon19");
const flechaAcordeon20 = document.querySelector(".flecha-acordeon20");
const flechaAcordeon21 = document.querySelector(".flecha-acordeon21");
const flechaAcordeon22 = document.querySelector(".flecha-acordeon22");
const flechaAcordeon23 = document.querySelector(".flecha-acordeon23");
const flechaAcordeon24 = document.querySelector(".flecha-acordeon24");

botonAcordeon1.addEventListener("click", function () {
  contenidoAcordeon1.classList.toggle("despliegue-acordeon");
  flechaAcordeon1.classList.toggle("rotacion-flecha");
});
botonAcordeon2.addEventListener("click", function () {
  contenidoAcordeon2.classList.toggle("despliegue-acordeon");
  flechaAcordeon2.classList.toggle("rotacion-flecha");
});
botonAcordeon3.addEventListener("click", function () {
  contenidoAcordeon3.classList.toggle("despliegue-acordeon");
  flechaAcordeon3.classList.toggle("rotacion-flecha");
});
botonAcordeon4.addEventListener("click", function () {
  contenidoAcordeon4.classList.toggle("despliegue-acordeon");
  flechaAcordeon4.classList.toggle("rotacion-flecha");
});
botonAcordeon5.addEventListener("click", function () {
  contenidoAcordeon5.classList.toggle("despliegue-acordeon");
  flechaAcordeon5.classList.toggle("rotacion-flecha");
});
botonAcordeon6.addEventListener("click", function () {
  contenidoAcordeon6.classList.toggle("despliegue-acordeon");
  flechaAcordeon6.classList.toggle("rotacion-flecha");
});
botonAcordeon7.addEventListener("click", function () {
  contenidoAcordeon7.classList.toggle("despliegue-acordeon");
  flechaAcordeon7.classList.toggle("rotacion-flecha");
});
botonAcordeon8.addEventListener("click", function () {
  contenidoAcordeon8.classList.toggle("despliegue-acordeon");
  flechaAcordeon8.classList.toggle("rotacion-flecha");
});
botonAcordeon9.addEventListener("click", function () {
  contenidoAcordeon9.classList.toggle("despliegue-acordeon");
  flechaAcordeon9.classList.toggle("rotacion-flecha");
});
botonAcordeon10.addEventListener("click", function () {
  contenidoAcordeon10.classList.toggle("despliegue-acordeon");
  flechaAcordeon10.classList.toggle("rotacion-flecha");
});
botonAcordeon11.addEventListener("click", function () {
  contenidoAcordeon11.classList.toggle("despliegue-acordeon");
  flechaAcordeon11.classList.toggle("rotacion-flecha");
});
botonAcordeon12.addEventListener("click", function () {
  contenidoAcordeon12.classList.toggle("despliegue-acordeon");
  flechaAcordeon12.classList.toggle("rotacion-flecha");
});
botonAcordeon13.addEventListener("click", function () {
  contenidoAcordeon13.classList.toggle("despliegue-acordeon");
  flechaAcordeon13.classList.toggle("rotacion-flecha");
});
botonAcordeon14.addEventListener("click", function () {
  contenidoAcordeon14.classList.toggle("despliegue-acordeon");
  flechaAcordeon14.classList.toggle("rotacion-flecha");
});
botonAcordeon15.addEventListener("click", function () {
  contenidoAcordeon15.classList.toggle("despliegue-acordeon");
  flechaAcordeon15.classList.toggle("rotacion-flecha");
});
botonAcordeon16.addEventListener("click", function () {
  contenidoAcordeon16.classList.toggle("despliegue-acordeon");
  flechaAcordeon16.classList.toggle("rotacion-flecha");
});
botonAcordeon17.addEventListener("click", function () {
  contenidoAcordeon17.classList.toggle("despliegue-acordeon");
  flechaAcordeon17.classList.toggle("rotacion-flecha");
});
botonAcordeon18.addEventListener("click", function () {
  contenidoAcordeon18.classList.toggle("despliegue-acordeon");
  flechaAcordeon18.classList.toggle("rotacion-flecha");
});
botonAcordeon19.addEventListener("click", function () {
  contenidoAcordeon19.classList.toggle("despliegue-acordeon");
  flechaAcordeon19.classList.toggle("rotacion-flecha");
});
botonAcordeon20.addEventListener("click", function () {
  contenidoAcordeon20.classList.toggle("despliegue-acordeon");
  flechaAcordeon20.classList.toggle("rotacion-flecha");
});
botonAcordeon21.addEventListener("click", function () {
  contenidoAcordeon21.classList.toggle("despliegue-acordeon");
  flechaAcordeon21.classList.toggle("rotacion-flecha");
});
botonAcordeon22.addEventListener("click", function () {
  contenidoAcordeon22.classList.toggle("despliegue-acordeon");
  flechaAcordeon22.classList.toggle("rotacion-flecha");
});
botonAcordeon23.addEventListener("click", function () {
  contenidoAcordeon23.classList.toggle("despliegue-acordeon");
  flechaAcordeon23.classList.toggle("rotacion-flecha");
});
botonAcordeon24.addEventListener("click", function () {
  contenidoAcordeon24.classList.toggle("despliegue-acordeon");
  flechaAcordeon24.classList.toggle("rotacion-flecha");
});

//_____________________________________________________________________________________________
//EVALUACIONES DE CLIENTES/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//_____________________________________________________________________________________________
const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

// Cuando CLICK en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// QUITAR la clase activo de TODOS puntos
// AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach((cadaPunto, i) => {
  // Asignamos un CLICK a cadaPunto
  punto[i].addEventListener("click", () => {
    // Guardar la posición de ese PUNTO
    let posicion = i;
    // Calculando el espacio que debe DESPLAZARSE el GRANDE
    let operacion = posicion * -33.333;

    // MOVEMOS el grand
    grande.style.transform = `translateX(${operacion}%)`;

    // Recorremos TODOS los punto
    punto.forEach((cadaPunto, i) => {
      // Quitamos la clase ACTIVO a TODOS los punto
      punto[i].classList.remove("activo");
    });
    // Añadir la clase activo en el punto que hemos hecho CLICK
    punto[i].classList.add("activo");
  });
});

console.log("Adios");
