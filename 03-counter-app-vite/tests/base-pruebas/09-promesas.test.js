import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas', () => { 
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });

     });
    test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy();
            done();
        })
        .catch( error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

            done();
        } );

     });


 });
 // jest por defecto todas son sincronas, ejecuta todo el codigo en secuencia
 /// ejecuta la promesa, llega al final y dice okay todo bien.
 // pero realmente hay que esperar la respuesta de la promesa
 // hay que llamar el done() para decir okay termine