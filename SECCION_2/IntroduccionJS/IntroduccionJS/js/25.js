// Fetch API con Promises.- Recupera datos a través de la red

const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
  .then((response) => {
    if (response.ok) {
    return response.json()
    }
    throw new Error('Hubo un error...')
  })
  .then(data => console.log(data))
  .catch(error => console.log(error.message))

