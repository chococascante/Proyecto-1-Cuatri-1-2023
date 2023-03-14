/**
 * 1. Numbers
 * 2. Strings
 * 3. Booleans
 * 4. Undefined y null
 */

// 1. Numbers
let num = 5;
let num1 = 10;
let numNegativo = -500;
let numPositivo = 500;

let suma = num + num1; //15
let resta = num - num1; //-5
let multiplicacion = num * num1; //50
let division = num / num1; //0.5
let residuo = num % num1; //5
let exponente = num ** num1; //9765625

let resultado = num + num1 - (resta / multiplicacion) * residuo ** exponente; //0.5
let textoResultado = resultado.toFixed(2); //0.50546565165

// 2. Strings
let letra = "a";
let nombre = "Juan";
let hola = "Hola";
let mundo = "Mundo";
let holaMundo = hola + mundo;
let stringTemplate = `Hola ${nombre} ${mundo}`;

let titulo = "Noticias";
let parrafo =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed ipsam laboriosam totam dolores libero? Quaerat, minima excepturi a omnis ex illum dolores laborum animi, praesentium aperiam aut, id ipsam.";

let seccioNoticias =
  "<section><h1>" + titulo + "</h1>" + "<p>" + parrafo + "</p></section>";

let seccionNoticiasTemplate = `
  <section>
    <h1>${titulo}</h1>
    <p>${parrafo}</p>
  </section>
`;

// 3. Booleans
let verdadero = true;
let falso = false;

let conjuncion = verdadero && falso; //false
let disyuncion = verdadero || falso; //true
let negacion = !verdadero; //false

// Coercion
let numero = 5 + "patito"; //"5patito"
let numero2 = 5 + "patito" + 5; //"5patito5"
let numero3 = 10 + true; //11
let numero4 = 10 + false; //10

let variable;

if (num > 5) {
  variable = "Christopher";
} else {
  variable = "Juan";
}

if (5 == "5") {
  //true
  console.log("Son iguales");
}

if (5 === "5") {
  //false
  console.log("Son iguales");
}

if (1 == true) {
  //true
  console.log("Son iguales");
}

if (0 == true) {
  //false
  console.log("Son iguales");
}

if (1 == true) {
  //false
  console.log("Son iguales");
}

if (0 === true) {
  //false
  console.log("Son iguales");
}
