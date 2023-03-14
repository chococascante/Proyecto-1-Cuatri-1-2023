/**
 *  1. Escriba una función que dados 3 números devuelva
 * el signo de la multiplicación de los 3. (Positivo o negativo).
 * 2. Escriba una función que reciba un número y una palabra,
 * y devuelva un string con la forma correcta, singular o plural.
 * Ej: 1 perro => perro
 *    2 perro => perros
 * 3. Escriba un ciclo que itere los números del 0 al 15 y
 * diga si son pares o impares
 * 4. Escriba un ciclo que imprima el siguiente patrón:
 *
 **
 ***
 ****
 *****
 */

// 3. Escriba un ciclo que itere los números del 0 al 15...
let contador = 0;
//contador <= 15
while (contador < 16) {
  const residuo = contador % 2;

  if (residuo === 0) {
    console.log(`El número ${contador} es par`);
  } else {
    console.log(`El número ${contador} es impar`);
  }
}

function esParEnRango(num) {
  for (let i = 0; i < num; i++) {
    const residuo = i % 2;

    if (residuo === 0) {
      console.log(`El número ${i} es par`);
    } else {
      console.log(`El número ${i} es impar`);
    }
  }
}

// 5 Imprimir patron
function asteriscos(filas) {
  let tempAsteriscos = "";

  for (let i = 0; i < filas; i++) {
    // tempAstericos = tempAsteriscos + "*";
    tempAsteriscos += "*";
    console.log(tempAsteriscos);
  }
}
