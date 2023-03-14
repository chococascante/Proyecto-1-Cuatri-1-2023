// Declarar una función
function holaMundo() {
  console.log("Hola mundo");
}

window.onload = function () {
  // Llamar a la función
  holaMundo();
  buscarParrafo();
};

function buscarParrafo() {
  const parrafo = document.getElementById("parrafo");

  console.log(parrafo);
}

const buscarParrafoArrow = () => {
  const parrafo = document.getElementById("parrafo");

  console.log(parrafo);
};

const holaMundoArrow = () => console.log("Hola mundo"); // Imprimir en consola

const esMayorDeEdad = (edad) => edad >= 18; //true o false
const esMayorArrow = (numero1, numero2) =>
  numero1 > numero2 ? numero1 : numero2;

// ----------------------------------- PRACTICA --------------------------
function sumar(num1, num2) {
  return num1 + num2;
}

// Llamo la función
const resultadoSuma = sumar(2, 3);
sumar(10, 3);
sumar(15, 20);
console.log(resultadoSuma);
console.log(sumar(5, 7));

// ---------------------------------- Ejercicio 1 --------------------------
// 1. Escriba una función que reciba dos números y devuelva o retorne el mayor.
// 2. Escriba una función que reciba
// un idioma ('es', 'en')
// y devuelva <hola mundo!> en el
// idioma correspondiente.

function mayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  // Si llegó aquí es porque num1 no es mayor a num2
  return num2;
}

function holaMundo(idioma) {
  if (idioma === "es") {
    return "Hola mundo!";
  } else if (idioma === "en") {
    return "Hello world!";
  }
  return "Idioma no soportado";
}

function holaMundoInternacional(idioma) {
  switch (idioma) {
    case "es":
      return "Hola mundo!";
    case "en":
      return "Hello world!";
    case "fr":
      return "Bonjour le monde!";
    case "it":
      return "Ciao mondo!";
    default:
      return "Idioma no soportado";
  }
}

console.log(holaMundoInternacional("fr"));
