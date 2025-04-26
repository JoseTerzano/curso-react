import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => { 

    //test('Debe de hacer match con el snapshot', () => { 

        //const title = 'Hola, soy goku';
        //const {container} = render( <FirstApp title= {title}/> );
        
        //expect(container).toMatchSnapshot();
     //});

     test('Debe de mostrar el titulo en un H1', () => { 

        const title = 'Hola, soy goku';
        const {container, getByText, getByTestId} = render( <FirstApp title= {title}/> );

        expect(getByText(title)).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);


      });

    test('Debe de mostrar el subtitulo enviado por props', () => { 

        const title = 'Hola, soy goku';
        const subtitle = 'Soy un subtitulo';
        const {getAllByText} = render( <FirstApp title= {title} subTitle={subtitle}/> );

        expect(getAllByText(subtitle).length).toBe(2);
     });
 });
 // Debe de hacer match con el snapshot significa que le voy a tomar una foto
 //al componente con todas las proptypes por defecto y si algo cambia
 //la prueba falla

 // render es una funcion que literalmente renderiza el componente
 // en memoria

 //el snapshot hace literal una captura de que se esta mostrando
 //para que luego se compare y se vea si se cambio algo