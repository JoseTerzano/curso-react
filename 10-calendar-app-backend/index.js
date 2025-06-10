const express = require( 'express' );
require('dotenv').config();


//Crear el Servidor de Express
const app = express();

// Directorio publico
app.use(express.static('public'));


// Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD // Eventos

//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
} )

//Un middelware es una funcion que se ejecuta cuando alguien hace una peticion a mi servidor
// Un endpoint es como una puerta de entrada a una funcionalidad del backend.