// Objetos - Destructuring de dos o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

// con el spread operator ... podemos agregar un objeto dentro de otro objeto

// const carrito = {
//     cantidad: 1,
//     ...producto  // spread operator
// }

const nuevoObjeto = {
    producto,
    cliente
}

console.log(nuevoObjeto);

// Unir las propiedades de ambos objetos, pero sobreescribe las que tienen el mismo nombre "Object.assign(primer_objeto, segundo_objeto)"

const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2);

// ! Otra forma de hacer lo mismo que Object.assigna, pero versión más larga

const nuevoObjeto3 = {
    ...producto,
    ...cliente
}

console.log(nuevoObjeto3);


