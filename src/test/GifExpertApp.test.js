import React from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas al componente <GifExpertApp />', () => {

    test('El componente se debe mostrar correctamente ', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostar una lista de categorias ', () => {
        const categories = ['One Punch','Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })
    
    
    
})
