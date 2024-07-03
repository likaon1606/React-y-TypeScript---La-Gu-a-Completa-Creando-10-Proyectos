// Template Strings y Concatenación
// ? NOTA: se puede concatenar con "," y "+" 

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

console.log('El producto es: ' + producto);
console.log(`El producto es: ${producto}`); //esta sintáxis es mejor

console.log(producto + "$" + precio + "Dólares, marca: " + marca);
console.log(`${producto} $${precio} Dólares, marca: ${marca}`);  //esta sintáxis es mejor