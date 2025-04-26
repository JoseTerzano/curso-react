import { fireEvent, render,screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en CounterApp', () => {
    const valor = 10;
    test('Hacer match con el snapshot', () => { 

        const {container} = render(<CounterApp value={valor} />)
        expect(container).toMatchSnapshot();
    
    });
    test('Debe mostrar valor inicial de 100', () => { 

        render(<CounterApp value = {100} />);
        expect(screen.getByText(100)).toBeTruthy();
        //expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');

    });


    test('Debe de incrementar con el boton +1', () => { 

        render(<CounterApp value = {valor} />);
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('11')).toBeTruthy();
    });
    test('Debe decrementar con el boton -1', () => { 

        render(<CounterApp value = {valor} />);
        fireEvent.click( screen.getByText('-1') );
        //screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });
    test('Debe de funcionar el boton Reset', () => { 

        render(<CounterApp value = {valor} />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        //fireEvent.click( screen.getByText('Reset') );
        screen.debug();
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(valor)).toBeTruthy();        
    });

 });