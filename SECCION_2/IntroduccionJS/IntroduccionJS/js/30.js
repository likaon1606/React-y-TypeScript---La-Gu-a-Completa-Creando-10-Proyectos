// ** Eventos del DOM - Clicks

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('click', () => {
//   heading.textContent = 'Nuevo heading al dar Click...'
// })

// heading.addEventListener('mouseenter', () => {
//   heading.textContent = 'Nuevo heading al pasar el mouse...'
// })

// heading.addEventListener('mouseleave', () => {
//   heading.textContent = 'Saliendo el mouse...'
// })

enlaces.forEach(enlace => enlace.addEventListener('click', (e) => {
  e.preventDefault()
  enlace.textContent = 'Diste click...'
}))
