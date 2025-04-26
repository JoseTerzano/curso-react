import { getHeroeById } from './08-imp-exp';
import heroes from './data/heroes';

//const promesa = new Promise( (resolve, reject) => {
//    setTimeout(() => {
        //tarea
        //imporat el
 //       const p1 = getHeroeById(2);
//        resolve(p1);
//        reject('No se encontro el heroe');
//    }, 2000);

//});
//las promesas son tareas asincronas, suceden al ultimo
//el resolve es cuando lo encuentra y hace el then
//el reject cuando no encuentra y hace el catch



//promesa.then((heroe) => {
//    console.log('Heroe', heroe);
//})
//.catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            //tarea
            //imporat el
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            };
            reject('No se encontro el heroe');
        }, 2000);
    
    });

}

getHeroeByIdAsync(1)
//.then( heroe => console.log('Heroe', heroe))
//.catch(err => console.warn(err));
//otra manera que como recibe el argumento y lo manda a otra funcion se puede hacer asi:
.then(console.log)
.catch(console.warn);
