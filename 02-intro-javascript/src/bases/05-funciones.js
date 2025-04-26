

//const saludar = function(nombre) {
  //  return `Hola, ${nombre}`;
//};


const saludar2 = (nombre) => { //La ventaja de las funciones flecha es que si solo tienen un return
    return `Hola, ${nombre}`;
}


const saludar3 = (nombre) => `Hola, ${nombre}`; //La ventaja de las funciones flecha es que si solo tienen un return

const saludar4 = () => 'Hola Mundo';

console.log(saludar2('Jose'));
console.log(saludar3('Jose'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

console.log(getUser());

//Tarea
//1. Transformar a funcion flecha
//2. Retornar objeto implicito
//3. Prueba
const getUsuarioActivo = (nombre) =>({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Jose');
console.log(usuarioActivo);