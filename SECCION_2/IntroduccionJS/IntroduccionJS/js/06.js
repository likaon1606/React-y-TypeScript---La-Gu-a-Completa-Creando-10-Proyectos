// Objetos - Destructuring de dos o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
        calle: "Calle México"
    }
}

//crea la variable nombre, pero la renombra como nombreCliente, para evitar el error de 2 variables con el mismo nombre
const {nombre} = producto
const { nombre: nombreCliente, direccion: {calle}} = cliente 

console.log(nombre);
console.log(nombreCliente);
console.log(calle);