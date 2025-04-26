

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 14.1234,
        lng: 34.1234,
    }

};



//console.table( {persona} );


//const persona2 = persona; NO HACER!!! porque copiamos la referencia del espacio de memoria no una copia de la misma
const persona2 = {...persona}; // Hacemos una copia del objeto persona, no una referencia a la misma dirección de memoria

console.log( persona );// sustituye tony por peter
console.log( persona2 );