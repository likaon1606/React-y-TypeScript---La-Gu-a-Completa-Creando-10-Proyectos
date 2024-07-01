// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

// Object.freeze permite congelar modificaciones al objeto y no permitirá reescribir, añadir o eliminar valores
Object.freeze(producto)

// Object.seal permite modificar, pero no añadir ni eliminar propiedades



// Reescribir un valor
producto.disponible = true

// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

// Eliminar propiedad
delete producto.precio

console.log(producto);