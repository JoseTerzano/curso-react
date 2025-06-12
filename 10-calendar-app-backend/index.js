const express = require( 'express' );
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');


//Crear el Servidor de Express
const app = express();

//Base de Datos
dbConnection()

//CORS
app.use(cors())

// Directorio publico
app.use(express.static('public'));


// Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD // Eventos
app.use('/api/events', require('./routes/events'));

//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
} )

// Un middleware es una funcion que se ejecuta cuando alguien hace una peticion a mi servidor
// Un endpoint es como una puerta de entrada a una funcionalidad del backend.
// El CORS es algo que se configura donde se puede restringir quien hace la peticion