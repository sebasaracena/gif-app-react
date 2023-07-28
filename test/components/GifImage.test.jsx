
import { render, screen } from '@testing-library/react';
import { GifImage  } from '../../src/gif/components/GifImage';

describe('Pruebas en <GifImage />', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifImage title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render( <GifImage title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });


    test('debe de mostrar el titulo en el componente', () => {
        
        render( <GifImage title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });
    
});