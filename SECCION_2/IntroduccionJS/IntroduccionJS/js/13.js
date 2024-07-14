// Function Declaration
// se pueden poner valores por defecto en los parámetros

// ? Puedo llamar la función antes, pues Js registra primero todas las funciones con esta sintáxis y en un segundo llamado comienza a ejecutar las funciones a diferencia de las "function expression"

sumar(10,20)
sumar(100,131)

function sumar(num1 = 0, num2 = 0) {
  console.log (num1 + num2);
}


