// Evaluación de corto circuito

const auth = true
auth && console.log('auth autenticado');

// ? Pero hay un corto circuito aquí abajo, porque "usuario" está vacío y aún así dice que el usuario está autenticado

const usuario = {}

usuario && console.log("Usuario autenticado");


// if (40) {
//   console.log('Truthy');
// } else {
//   console.log('Falsy');
// }