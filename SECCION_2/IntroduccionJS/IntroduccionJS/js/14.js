// Function Expression
// Entre el nombre y la palabra function se coloca ya sea "let" o "const"
// Hacen lo mismo que las funciones normales

const sumar = function(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2)
}

sumar(10, 20);
sumar(300, 1);
sumar(100)
