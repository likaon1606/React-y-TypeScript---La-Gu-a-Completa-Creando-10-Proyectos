// ** Manipular elementos HTML con JS

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'

// para asignar un id a un elemento por js
heading.id = 'Un nuevo ID'

// para eliminar clases 
heading.removeAttribute('class')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'



// ** Para cambiar elementos de una colección

// solo cambia el primer elemento
// enlaces[0].textContent = 'Nuevo Enlace'

// Se cambian todos los elementos
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')