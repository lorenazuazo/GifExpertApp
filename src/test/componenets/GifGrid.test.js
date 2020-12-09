import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')//es para simular/falsear la data que trae el componenete


describe('Pruebas a <GifGrid />', () => {

    const categoria = 'Hola mundo';
   
    
    test('el componente se debe mostrar correctamente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })
        const wrapper = shallow(<GifGrid categoria={categoria} />); 
        expect(wrapper).toMatchSnapshot();   
    });
    
    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        const gif = [{
            id :'1',
            url:'https://localhost/algo.jpg',
            title:'Test al componente'
        },
        {
            id :'2',
            url:'https://localhost/algo.jpg',
            title:'cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data:gif,
            loading:false
        });

        const wrapper = shallow(<GifGrid categoria={categoria} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gif.length);
    });    
    
});
