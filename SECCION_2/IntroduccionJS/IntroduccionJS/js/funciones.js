// hay que poner en el HTML 'type="module", para poder leer las funciones importadas'

function sumar(n1, n2) {
  return n1 + n2
}

function restar(n1, n2) {
  return n1 - n2
}

export  {
  sumar, 
  restar
}

// ** function declaration

// export function restar(n1, n2) {
//   return n1 - n2
// }




// ** Export default - Solo puede existir uno por archivo, se puede nombrar como se desee y al importarlo, no se coloca entre {} ejemplo: import multiplicar from './funciones.js'

export default function multiplicar (n1, n2) {
  return n1 * n2
}





