//** Operador Ternario "? :"
const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

// auth ? 
// console.log('Usuario autenticado') : 
// console.log('No autenticado, ir a LOGIN')

// saldo > pagar ?
//   console.log('Si, si puedes pagar') :
//   console.log('No, no puedes pagar')

// ? Ternario anidado .- se recomienda solo 2 niveles, ya que es dificil de mantener varios ternarios anidados

saldo > pagar || tarjeta?
  console.log('Si, si puedes pagar') :
  // tarjeta ?
  //   console.log('puedes pagar con tarjeta') :
    console.log('No, no puedes pagar')

