console.log("Portafolio cargado correctamente");
function saludar() {
  alert("Gracias por visitar mi portafolio");
}
document.addEventListener("DOMContentLoaded", saludar);
function resaltarMenuActivo() {
  console.log("Resaltando el enlace activo del menu");
}
document.addEventListener("DOMContentLoaded", saludarUnaVez);
let yaSaludo = false;
function saludarUnaVez() {
  if (!yaSaludo) { saludar(); yaSaludo = true; }
}
