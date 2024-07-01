// Objetos
 const producto = {
    nombre: "tablet", //completo es una propiedad, campo "nombre" como nombre o key y campo "tablet" valor o value
    precio: 300,
    disponible: false
 }

//  console.log(producto);
//  console.log(typeof(producto));
//  console.table(producto)

console.log(producto.nombre);

// ? DESTRUCTURING

const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);



// Object literal Enhacement, cuando la llave y el valor se llaman igual, no es necesario poner doble vez el nombre, siempre y cuando se llamen igual
const autenticado = true;
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto);