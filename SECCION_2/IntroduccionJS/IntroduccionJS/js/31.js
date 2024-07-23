// Evento del DOM - Inputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
  console.log(e.target.value);
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword)


// Si se tienen diferentes inputs y van a ejecutar la misma función
function functionPassword() {
  inputPassword.type = 'text'
  
  // aquí regresamos el valor a tipo password después de 300 milisegundos
  setTimeout(() => {
    inputPassword.type = 'password'
  }, 300);
}