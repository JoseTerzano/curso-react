import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;

        const hero = getHeroeById(id); 
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });


     });
     test('getHeroeById debe retornar undefined si no existe el Id', () => {
        const id = 100;
        const hero = getHeroeById(id); 

        expect(hero).toBeFalsy();
        

     });

     // Tarea
     // Debe retornar un arreglo con los heroes de DC
     // Length === 3
     // toEqual al arreglo filtrado
     test('getHeroByOwner debe regresar heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect( heroes.length ).toBe(3);
        expect(heroes).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        
      });

     // Debe de retornar un arreglo con los heroes de Marvel
     // Length === 2
     test('getHeroByOwner debe regresar heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);

    });

 });
 // toBeFalsy evalua si el resultado es False, nulo o undefined