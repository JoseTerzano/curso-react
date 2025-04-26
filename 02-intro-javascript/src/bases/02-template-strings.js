const nombre = "Juan";
const apellido = "Pérez";

//const nombreCompleto = nombre + " " + apellido;

//template strings
const nombreCompleto = `
${nombre} ${apellido} ${1 + 1}`; 

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)} `);