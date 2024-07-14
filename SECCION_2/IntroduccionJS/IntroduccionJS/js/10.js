// OPERACIONES CON ARRAYS

const tecnologias = ['HTML', 'CSS', 'JavaScrtipt', 'React.js', 'Node.js']

//* Agregar un elemento al final del array
//! No se recomienda usar push en React.js porque modifica el array

// tecnologias.push('Nest.js')
// console.table(tecnologias);

//* esto es mejor
const nuevoArray = [...tecnologias, 'Nest.js']
// console.table(nuevoArray);

//* "shift()" Elimina el primer elemento de un array
//! También muta el ARRAY
tecnologias.shift()
// console.table(tecnologias)

//* esto es mejor
const tecnologias2 = tecnologias.filter((tech) => {
    if(tech !== 'HTML'){
        return tech
    }
})

// console.log(tecnologias2)


// .map NO modifica el ARRAY
const tecnologias3 = tecnologias.map(function(tech) {
    if(tech === 'Node.js'){
        return 'Nest.js'
    } else {
        return tech
    }
})
console.log(tecnologias3);



