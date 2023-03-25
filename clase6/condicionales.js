const verdadero = true;
const falso = false;

if (verdadero) {
  console.log("Es verdadero"); // esto se ejecuta
}

if (falso) {
  console.log("Es falso"); // esto no se ejecuta
} else {
  console.log("Es falso, pero estoy en el else"); // esto se ejecuta
}

if (falso) {
  console.log("Es falso"); // esto no se ejecuta
}
if (!falso) {
  console.log("Es falso"); // esto no se ejecuta
} else if (verdadero) {
  console.log("Es verdadero"); // esto se ejecuta
}

// Switch
let valor = 3;
switch (valor) {
  case 0:
    return "Estoy en caso 0";

  case 1:
    return "Estoy en caso 1";

  case 2:
    return "Estoy en caso 2";

  default:
    return "Estoy en default";
}

const ruta = "/hamburguesa";
switch (ruta) {
  case "/hamburguesa":
    return "Hamburguesa";
  case "/pizza":
    return "Pizza";
  case "/sushi":
    return "Sushi";
  default:
    return "No encontré la ruta";
}
