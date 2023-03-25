const listaEstudiantes = [
  {
    nombre: "Luis",
    apellido: "Cascante",
    edad: 30,
    nota: 70,
  },
  {
    nombre: "Sienna",
    apellido: "Cascante",
    edad: 1,
    direccion: {
      calle: "Av. Siempreviva",
      numero: 123,
    },
    nota: 50,
  },
  {
    nombre: "Pedro",
    apellido: "Pascal",
    edad: 20,
    nota: 80,
  },
  {
    nombre: "Brendan",
    apellido: "Fraser",
    edad: 40,
    nota: 90,
  },
];

window.onload = configurarPagina;

function configurarPagina() {
  const input = document.getElementById("input-nombre");
  console.log(input);

  // Agregar un evento al input
  input.addEventListener("change", function (event) {
    // Poniendo el texto en el span
    const span = document.getElementById("span-nombre");
    span.innerText = event.target.value;
  });

  const lista = document.getElementById("lista");

  const listaNombre = listaEstudiantes.map(function (estudiante, indice) {
    return `<li class="estudiante" id=${indice}>${estudiante.nombre} ${estudiante.apellido}</li>`;
  }); // ["<li>Luis Cascante</li>", "<li>Sienna Cascante</li>", "<li>Pedro Pascal</li>", "<li>Brendan Fraser</li>"]

  // "<li>Luis Cascante</li><li>Sienna Cascante</li><li>Pedro Pascal</li><li>Brendan Fraser</li>"
  lista.innerHTML = listaNombre.join("");
}

function configurarPagina2() {
  const input = document.getElementById("input-nombre");
  console.log(input);

  // Agregar un evento al input
  input.addEventListener("change", function (event) {
    // Poniendo el texto en el span
    const span = document.getElementById("span-nombre");
    span.innerText = event.target.value;
  });

  const lista = document.getElementById("lista");

  for (let i = 0; i < listaEstudiantes.length; i++) {
    const estudiante = listaEstudiantes[i];
    const elemento = document.createElement("li");
    elemento.id = `estudiante-${i}`;
    elemento.className = "estudiante";
    elemento.innerText = `${estudiante.nombre} ${estudiante.apellido}`;
    lista.appendChild(elemento);
  }
}
