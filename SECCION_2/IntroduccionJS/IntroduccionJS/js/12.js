//*Iteradores de arreglos o ARRAYS.-Iterar nos permite acceder a cada valor de nuestro arreglo

const tecnologias = ['HTML', 'CSS', 'JavaScrtipt', 'React.js', 'Node.js', 'Nest.js', 'Typescript']

// for(i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i]);
// }


//? ** forEach ** Ejecuta una función indicada por cada elemento del arreglo. El forEach va a saber cuantos elementos hay en tu arreglo y se va a ejecutar solo esa cantidad de veces
//* No genera un arreglo nuevo

const arrayforEach = tecnologias.forEach(function(tech) {
    return tech
})



//? ** map ** Crea un nuevo arreglo en base a la función, pero se pueden usar condiciones
//! Genera un arreglo nuevo

const arrayMap = tecnologias.map(function(tech) {
    return tech
})

console.log(arrayforEach);
console.log(arrayMap);




//? ** for ... of ** Ejecuta un bloque de código por cada elemento de un arreglo

for(let tech of tecnologias) {
    console.log(tech);
}


