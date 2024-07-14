//** */ Destructuring ARRAYS

const tecnologias = ['HTML', 'CSS', 'JavaScrtipt', 'React.js', 'Node.js']


//? ambas sintáxis hacen lo mismo, pero  el 2 es la sitáxis moderna, las comas simbolizan los primeros elementos y el nombre reactjs, extrae React.js, NO IMPORTA EL NOMBRE, sea cual sea, extraerá el elemento 3

// 1.-
const react = tecnologias[3]

// 2.-
const [,,, reactjs] = tecnologias

console.log(reactjs);