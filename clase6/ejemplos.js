// A - Todo el archivo es un scope
const nombre = "Pedro";
nombre = "Luis";

const listaEstudiantes = ["Pedro", "Luis", "Maria"];
listaEstudiantes.push("Juan");
// listaEstudiantes = ["Pedro", "Luis", "Maria", "Juan"];

function hola() {
  // B - Todo la función es un scope
  let nombre = "Pedro";
  let apellido;
  if (nombre == "Pedro") {
    // C - Todo el if es un scope
    let edad = 29;
    apellido = "Pascal";
    console.log(nombre + apellido + edad); //PedroPascal
  } else {
    // D - Todo el else es un scope
    apellido = "Perez";
    console.log(nombre + apellido + edad); //PedroPascal
  }

  console.log(nombre + apellido + edad); //Pedroundefined (no existe la variable apellido
}

console.log(nombre); //undefined
