

//Desestructuracion o Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: "Ironman",
};

const { nombre, edad, clave } = persona;//extrae lo que esta entre {} lo que pertenece al objeto pesona


//console.log(nombre);
//console.log(persona.edad);
//console.log(persona.clave);

const useContext = ({clave, edad, rango = 'Capitan'}) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.15,
            long: 12.25,
        },
    }
};

const avenger = useContext(persona);

//const {nombreClave, años, latlng: {lat,long}} = avenger;
const {nombreClave, años, latlng} = avenger;
const {lat, long} = latlng;

console.log(nombreClave, años);
console.log(lat, long);


