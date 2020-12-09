import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test Suite component <GifGridItem />', () => {
    
    const img = {
        id :'1',
        title:'Test al componente',
        url:'https://localhost/algo.jpg'
    }

    const wrapper = shallow(<GifGridItem {...img} />);
    test('El componente se debe mostrar correctamente}', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el valor del props title ', () => {

        const p = wrapper.find('p').text().trim();
        expect(p).toBe(img.title);
    });
    test('debe tener la imagen igual a la url y el alt pasados por props', () => {
        const imagen=wrapper.find('img');
        //console.log(imagen.prop('src'))
        expect(imagen.prop('src')).toBe(img.url);
        expect(imagen.prop('alt')).toBe(img.title)
    });

    test('que el div contenga className=animate__fadeInRight', () => {
        const clase='animate__fadeInRight';
        const claseWrapper=wrapper.find('div').prop('className')
        expect(claseWrapper).toContain(clase)
        //tambien se puede hacer
        //expect(claseWrapper.includes(clase)).not.toBe(false)
        //expect(claseWrapper.includes(clase)).toBe(true)
        
    });
    
})
