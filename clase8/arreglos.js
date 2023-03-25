//               0  1  2  3
const arreglo = [1, 2, 3, 4];

const dobles = arreglo.map(function (elemento) {
  return elemento * 2;
}); // [2, 4, 6, 8]

console.log(arreglo[0]); // 1

const listaNombreEstudiantes = [
  "Luis",
  "Sienna",
  "Luisa",
  "Luisito",
  "Luisote",
];
console.log(listaNombreEstudiantes.length); // 5
console.log(listaNombreEstudiantes[2]); // Luisa

console.log(listaNombreEstudiantes[listaNombreEstudiantes.length - 1]); // Luisote
console.log(listaNombreEstudiantes[5]); // undefined

//             0  1  2  3  4  5  6  7  8
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// --------------------------------------------------------------------------------
const listaEstudiantes = [
  {
    nombre: "Luis",
    apellido: "Cascante",
    edad: 30,
    nota: 70,
    direccion: {
      calle: "Av. Siempreviva",
      numero: 123,
      vecinos: [
        {
          nombre: "Luisa",
          apellido: "Cascante",
          edad: 30,
          direccion: {
            calle: "Av. Nuncaviva",
            numero: 456,
          },
        },
      ],
    },
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
];

const objeto = listaEstudiantes[0];
console.log(objeto.nombre); // Luis

// Escriba una expresión que me imprima la calle de la primera vecina de Luis
const calleVecina =
  listaEstudiantes[0].direccion.vecinos[
    listaEstudiantes[0].direccion.vecinos.length - 1
  ].direccion.calle;

const primerEstudiante = listaEstudiantes[0];
const vecinos = primerEstudiante.direccion.vecinos;
const callePrimerVecino = vecinos[0].direccion.calle;

// --------------------------------------------------------------------------------
// Métodos de arreglos
const array = [];

const cantidadElementos = array.push({
  nombre: "Luis",
  apellido: "Cascante",
  edad: 30,
});

array.push({
  nombre: "Alonzo",
  apellido: "Franco",
  edad: 30,
});

const ultimoEstudiante = array.pop();

// ESTO ES SOLO UN EJEMPLO -----------------------------------------------------
function mapCriollo(arreglo, funcion) {
  const nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    const elementoActual = arreglo[i];
    const nuevoElemento = funcion(elementoActual, i); //Sienna Cascante
    nuevoArreglo.push(nuevoElemento);
  }
  return nuevoArreglo; // ["Luis Cascante", "Sienna Cascante"]
}

function devolverNombreCompleto(estudiante) {
  return `${estudiante.nombre} ${estudiante.apellido}`;
}

devolverNombreCompleto();
const nuevoArreglo1 = mapCriollo(listaEstudiantes, devolverNombreCompleto);
const nuevoArreglo2 = mapCriollo(listaEstudiantes, function (estudiante) {
  return `Nombre completo: ${estudiante.nombre} ${estudiante.apellido}, edad: ${estudiante.edad}`;
});

// ----------------------------------------------------

function sumar(num1, num2) {
  return num1 + num2;
}

const numero1 = 1;
const numero2 = 2;
const resultado = sumar(numero1, numero2);

console.log(listaEstudiantes);
console.log(nuevoArreglo);
// TERMINA EL EJEMPLO -----------------------------------------------------

// FOR EACH
function imprimir(elemento, indiceElemento) {
  console.log(elemento);
}

listaEstudiantes.forEach(imprimir);

listaNombreEstudiantes.forEach(function (elementoActual, indiceElemento) {
  console.log(elementoActual, indiceElemento);
  // NO DEVUELVE NADA
});

listaNombreEstudiantes.forEach((elementoActual, indiceElemento) => {
  console.log(elementoActual, indiceElemento);
  // NO DEVUELVE NADA
});

// MAP
const nuevoArreglo = listaNombreEstudiantes1.map(function (
  elementoActual,
  indiceElemento
) {
  return `${indiceElemento}. ${elementoActual}`;
});

const estudiantesFormateados = listaEstudiantes.map(function (elemento) {
  return { nombre: elemento.nombre, apellido: elemento.apellido };
}); // [{ nombre: "Luis", apellido: "Cascante" }, { nombre: "Sienna", apellido: "Cascante" }]

// filter
const estudiantesAprobados = listaEstudiantes.filter(function (elemento) {
  return elemento.nota >= 70; // booleano -> true o false
}); // [{ nombre: "Luis", apellido: "Cascante", nota: 70 }]

// find
const estudianteEncontrado = listaEstudiantes.find(function (elemento) {
  return elemento.nombre === "Luis"; // booleano -> true o false
}); // { nombre: "Luis", apellido: "Cascante", nota: 70 }
