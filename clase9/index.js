/**
 * Práctica General de JS
 * 1. Escriba una función que reciba un contador, y un valor y cree
 * un arreglo con la cantidad de valores que dice el contador.
 *  llenar(3, 'b') => ['b', 'b', 'b']
 *  llenar(10, 1) => [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 *  llenar(5, true) => [true, true, true, true, true]
 *
 * 2.Escriba una función que le dé vuelta a un arreglo. [1, 2, 3] => [3, 2, 1]
 *
 * 3. Escriba una función que reciba dos arreglos y diga si son iguales  o no.
 * [1, 2], [1, 2] = true
 * [2, 1], [1, 2] = false
 *
 * 4. Escriba una función que reciba un arreglo de strings y
 * devuelva todos los strings concatenados.
 * ["Hola", "Mundo", "Patito"] => "Hola Mundo Patito"
 *
 * 5.  Escriba una función que "revuelva" un arreglo.
 * O sea, que cambie los elementos de posición al azar.
 * Pueden usar Math.random()
 *
 */

/**
 * Más práctica de JS
 * /**
 * Strings
 * 1. Escriba una función que imprima en consola "Hola Mundo!".
 * 2. Escriba una función que reciba una variable y diga si la variable es string o no.
 * 3. Escriba una función que revise si un string está vacío o no. ('')
 * 4. Escriba un string con nombre y apellido juntos y lo separe en un arreglo de strings.
 *    con el nombre de primero y el apellido de segundo. str.split(' ') 'Luis Cascante' => ['Luis', 'Cascante']
 * 5. Escriba una función que extraiga solo los primeros n caracteres de un string. str.slice(0, n) str.substring(0, n)
 * 6. Escriba una función que reciba nombre y apellido (en un string juntos) y devuelva las iniciales.
 *    str.split 'Luis Cascante' => 'L.C'
 * 7. Escriba una función que ponga la primera letra en mayúscula. 'luis' => 'Luis'
 *
 * Objetos
 *     ------------- TODAS RECIBEN EL OBJETO COMO PARÁMETRO TAMBIÉN ---------------------
 * 1. Escriba una función que imprima las LLAVES de los atributos de un objeto.
 *  {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    ||
    ['nombre', 'apellido'].
  
 * 2. Escriba una función que imprima los VALORES de los atributos de un objeto.
    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    ||
    ['Luis', 'Cascante'].
 * 3. Escriba una función que elimine un atributo de un objeto, recibe el nombre del atributo como parámetro.
    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: nombre
    {
      apellido: 'Cascante'
    }
 * 4. Escriba una función que devuelva la longitud o cantidad de atributos de un objeto.
    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || 
    2
 * 5. Escriba una función que agregue un atributo a un objeto, recibe el nombre del atributo y el valor.
    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: llave, valor
    {
      nombre: 'Luis',
      apellido: 'Cascante',
      llave: valor
    }
 * 6. Escriba una función que actualice el valor de un atributo en un objeto,
 *    recibe el nombre del atributo y el valor.
 *  
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: "nombre", "Pedro"
    {
      nombre: 'Pedro',
      apellido: 'Cascante',
    }
 * 7. Escriba una función que revise si un objeto tiene un atributo, recibe el nombre del atributo.
 *
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: apellido
    true
 * Ciclos
 * 1. Escriba una función que reciba un objeto y devuelva un arreglo de llaves/valor. ['llave', 'valor']
  * const obj = {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    [
      ['nombre', 'Luis'], 
      ['apellido', 'Cascante']
    ]
 * 2. Escriba una función que reciba un objeto y cree una copia cambiando las llaves por lo valores
 *    y los valores por las llaves.
 * 
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    ||
    {
      Luis : 'nombre',
      Cascante: 'apellido'
    }
 * 3. Escriba una función que reciba un arreglo de objetos y los ordene de mayor a menor por el atributo id.
    [
      {
        id: 2,
        Luis : 'nombre',
        Cascante: 'apellido'
      },
      {
        id: 1,
        Luis : 'nombre',
        Cascante: 'apellido'
      }
    ]
    ||
    [
      {
        id: 1,
        Luis : 'nombre',
        Cascante: 'apellido'
      },
      {
        id: 2,
        Luis : 'nombre',
        Cascante: 'apellido'
      }
    ]
 * 4. Escriba una función que reciba un número (lo reciben como string) y le dé la vuelta.
    '32165' =>  '56123'
 * 5. Escriba una función que reciba un string y diga si es palíndromo o no. (se escribe igual al revés)
    'hannah' sí
    'anita lava la tina' sí
    "luis" => 'siul'   NO
 * 6. Escriba una función que reciba un string y encuentre la palabra más grande del string
 *  'anita lava la tina' => 'anita'
 * 
 * General
 * 1. Escriba una función que reciba un arreglo y una función y ejecute la función en cada elemento del arreglo.
 * 2. Escriba una función que reciba dos objetos y diga si todos sus atributos y valores son iguales o no.
 * 
 * {
    Luis : 'nombre',
    Cascante: 'apellido'
  },
  {
    Luis : 'nombre',
    Cascante: 'apellido',
    color: 'rojo'
  }
 * 3. Escriba una función que reciba n números, sume todos y devuelva el resultado de la suma.
  function(...parametros) => function(1,2,3,4) === function([1, 2, 3 ,4])
 * 4. Escriba una función que reciba dos arreglos y elimine del primero los elementos que aparecen en el segundo.
  [1,3,4,5,6,7], [3, 7] => [1, 4, 5, 6]
 * 5. Escriba una función que reciba un arreglo y una función, si la función devuelve true agrega el elemento a un arreglo de los que pasaron y sino a un arreglo de los que NO pasaron, imprime los dos.
 */
