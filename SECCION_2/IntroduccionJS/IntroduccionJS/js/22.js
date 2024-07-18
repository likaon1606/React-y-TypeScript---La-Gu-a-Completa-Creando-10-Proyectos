// ** Optional chaining ' ? ' - Permite acceder a las propiedades de un objeto o llamar métodos de propiedades, sin tener que verificar si existen o no

const alumno = {
  nombre: 'Juan',
  clase: 'Programación 1',
  aprobado: true,
  examanes: {
    examen1: 190
  }
}

// ? Es lo mismo que preguntar por un "if" si existe examenes y luego continua ejecutando el código, pero más corto

console.log(alumno.examanes?.examen1);

console.log('Después de ALUMNO');


// ** Nullish coalecing operator (??) - Retorna el valor del lado derecho, cuando el valor del lado izquierdo es nulo o undefined. Caso contrario, retorna el valor de la izquierda

const pagina = 10 ?? 1
console.log(pagina);

const pagina2 = null ?? 1
console.log(pagina2);