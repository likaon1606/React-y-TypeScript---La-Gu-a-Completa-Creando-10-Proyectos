//Arrow Functions.- Si se llaman antes de ser declaradas, marcará error. Otra caracteristica es que puedes eliminar las "{}" si solo tienen una línea dentro

const sumar = (num1 = 0, num2 = 0) => console.log(num1 + num2);


sumar(10, 20)
sumar(300, 1)
sumar(100)