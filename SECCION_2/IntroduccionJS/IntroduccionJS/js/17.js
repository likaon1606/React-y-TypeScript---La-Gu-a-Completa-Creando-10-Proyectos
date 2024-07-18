//** ARRAY. MÉTODOS

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10, 20, 30]



//** Filter

// const newArray = tecnologias.filter(tech => tech !== 'CSS')
// const nums = numeros.filter(num => num >= 20)

// console.log(newArray);
// console.log(nums);




//** Includes

// const resultado = tecnologias.includes('CSS')

// console.log(resultado);




//** Some - Devuelve si al menos uno cumple la condición

// const resultado = numeros.some(num => num > 15)
// if (resultado) {
//   console.log('Sí hay elementos dentro del array que cumplen la condición');
// } else {
//   console.log('No hay elementos que coincidan');
// }



//** */ Find - Devuelve le primer elemento que cumpla una condición

// const resultado = numeros.find(num => num > 20)




//** Every - Retorna TRUE o FALSE si todos cumplen la condicón

// const resultado = numeros.every(num => num > 20)



//** Reduce - Es útil para ir sumando en un carrito de compras para mostrarle al usuario el número de articulos o precios que va acumulando en el carrito de compras

// const resultado = numeros.reduce((total, numero) => {
//   console.log(total);
//   console.log(numero);

//   return total + numero;
// }, 0);

// ? Esto es lo mismo que arriba pero resumido
const resultado = numeros.reduce((total, numero) => total + numero, 0);

console.log(resultado);
