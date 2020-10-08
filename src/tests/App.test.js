import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe('Pruebas en <App/>', () => {
    
    test('Debe de mostrar el mensaje "Hola soy goku"', () => {

        const saludo = 'Hola soy Goku'
        const { getByText } = render( <App saludo={ saludo } /> );

        expect( getByText(saludo) ).toBeInTheDocument();

    })

})
