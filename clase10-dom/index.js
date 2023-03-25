window.onload = function () {
  const formulario = document.getElementById("form1");
  formulario.addEventListener("submit", function (event) {
    // Previene recarga de página
    event.preventDefault();

    const nombre = document.getElementById("input-nombre").value;
    const apellido = document.getElementById("input-apellido").value;

    console.log("Nombre", nombre);
    console.log("Apellido", apellido);
  });
};

function onSubmit(event) {
  // Previene recarga de página
  event.preventDefault();

  const nombre = document.getElementById("input-nombre").value;
  const apellido = document.getElementById("input-apellido").value;

  console.log("Nombre", nombre);
  console.log("Apellido", apellido);
}
