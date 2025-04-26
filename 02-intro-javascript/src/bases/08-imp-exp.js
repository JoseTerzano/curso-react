//import { heroes } from './data/heroes'
import heroes, { owners } from './data/heroes'


//console.log(owners);


export const getHeroeById = (id) => heroes.find((personaje) => personaje.id === id);


const getHeroesByOwner = (owner) => heroes.filter((personaje) => personaje.owner === owner);


//console.log(getHeroesByOwner('DC'));