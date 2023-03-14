const sienna = {
  nombre: "Sienna",
  edad: 1,
  colorPelo: "café",
  peso: 35,
};

const objetoVacio = {};

// Extraer valores
// console.log(sienna.nombre); // "Sienna"
// console.log(sienna.peso); //35
const nuevoObjeto = {
  nombre: sienna.nombre,
  peso: sienna.peso,
};
// console.log(nuevoObjeto);
// Otra forma misteriosa... chan chan

// console.log(sienna);

/**
 * {nombre: "Sienna", edad: 1, colorPelo: "café", peso: 35}
 */

// Borrar atributo
delete sienna.peso;

// console.log(sienna);
/**
 * {nombre: "Sienna", edad: 1, colorPelo: "café"}
 */

// Agregar un atributo
let colorOjos = "amarillo";
sienna.colorOjos = colorOjos;
// console.log(sienna);
/**
 * {nombre: "Sienna", edad: 1, colorPelo: "café", colorOjos: "amarillo"}
 */

// Volviendo a la otra forma misteriosa... chan chan
const atributo = "altura";
sienna["altura"] = 50;
sienna.altura = 50;
// console.log(atributo); //colorOjos
// console.log(sienna[atributo]); // amarillo

// Iterar sobre un objeto
for (const llave in sienna) {
  console.log("llave", llave); // "nombre", "edad", "colorPelo", "peso"
  console.log(`La llave es ${llave} y el valor es ${sienna[llave]}`);
  // 1. La llave es nombre
  // 2. La llave es edad
  // 3. La llave es colorPelo
  // 4. La llave es peso
}

const persona = {
  nombre: "Luis",
  apellido: "Cascante",
  direccion: {
    calle: "Calle 1",
    numero: 1,
    ciudad: "Bogotá",
  },
  edad: 29,
};

console.log(persona.direccion); // {calle: "Calle 1", numero: 1, ciudad: "Bogotá"}
console.log(persona.direccion.calle); // Calle 1
