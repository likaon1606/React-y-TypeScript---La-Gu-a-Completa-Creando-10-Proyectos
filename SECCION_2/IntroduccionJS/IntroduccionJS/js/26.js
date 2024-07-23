// ** Fetch API con Async / Await .- Con estos métodos, sí se requiere de una función

const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//     return response.json()
//     }
//     throw new Error('Hubo un error...')
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))



// ** Con Async / Await .- Se lee el código de derecha a izquierda, estamos esperando la respuesta de fetch y la almacenamos en una variable

// ? ** En lugar de cachar el error con .then, lo hacemos con try / catch

const consultarAPI = async() => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Hubo un error...')
    }
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

consultarAPI()
