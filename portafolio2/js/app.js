const lista = document.querySelector("#listaId");
const botonActivo = document.querySelector("#botonActivo");

const botonOscuro = document.querySelector("#btnOscuro")
const bg = document.querySelector("#bg");
const bg2 = document.querySelector("#bg2");
const bg3 = document.querySelector("#bg3");

const p = document.querySelectorAll("p");
const elementos = document.querySelectorAll(".elemento");
const h2 = document.querySelectorAll("h2");
const enlaces = document.querySelectorAll("a");
const footer = document.querySelector("#footer");
const container = document.querySelector("#container")

const h1 = document.querySelector("h1")
const bxMenu = document.querySelector("#bx-menu")

botonActivo.addEventListener('click', () =>{
    lista.classList.toggle("activo")
})

botonOscuro.addEventListener('click', () =>{
    console.log("hola mundo")
    bg.classList.toggle("bgOscuro")
    bg2.classList.toggle("bgOscuro")
    bg3.classList.toggle("bgOscuro")

    p.forEach(p => {
        p.classList.toggle("pOscuro");
      });

    elementos.forEach(p => {
        p.classList.toggle("fondoOscuro");
      });

    h2.forEach(p => {
        p.classList.toggle("tituloOscuro");
      });

    footer.classList.toggle("footerOscuro")
    container.classList.toggle("containerOscuro")
    h1.classList.toggle("titulooOscuro")
    bxMenu.classList.toggle("bxMenuOscuro")

    enlaces.forEach(p => {
        p.classList.toggle("enlacesOscuro");
      });

})


document.addEventListener("DOMContentLoaded", function() {
  let elemento = document.querySelectorAll(".elemento");


   // Iterar sobre cada div con la clase 'cuadrado'
   elemento.forEach(function(element) {
    // Manejar el evento de clic en cada cuadrado
    element.addEventListener("click", function() {
      // Redirigir a la página deseada (puedes cambiar la URL)
      window.location.href = "subPaginas/proyecto1.html";
    });
  });
});
