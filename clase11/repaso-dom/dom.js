window.onload = function () {
  const parrafo = document.getElementById("parrafo");
  // parrafo.style.color = "red";
  // parrafo.style.backgroundColor = "blue";

  parrafo.classList.add("patito");

  const boton = document.getElementById("boton-crear-orden");
  boton.addEventListener("click", function () {
    console.log("click");
    parrafo.classList.toggle("parrafo");
  });
};

function modificarParrafo() {
  console.log("click");
  parrafo.classList.toggle("parrafo");
}
