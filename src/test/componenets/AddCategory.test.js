import React from 'react';
import '@testing-library/jest-dom'//se importa para usar toHaveBeenCalled si no reconoce al escribir
import { shallow } from 'enzyme';
import  AddCategory  from  '../../components/AddCategory';

describe('Test al componente <AddCategory />', () => {

    const setCategorias =  jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategorias}/>);

    beforeEach(() =>{
        jest.clearAllMocks(); //esto limpia todas las simulaciones cada vez que entra en un test
        wrapper = shallow(<AddCategory setCategorias={setCategorias}/>);

    })
    test('El componente se debe mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input=wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change',{ target:{value} });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe de postear la informacion onSubmit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategorias).not.toHaveBeenCalled();
    });

    test('debe de llamar a setCategorias y limpiar la caja de text', () => {
        const value = 'Lore';
        //1.simular wl inputChange
        wrapper.find('input').simulate('change',{target:{value}});
        //2.simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        //3.setCategorias de haber sido llmado
        expect(setCategorias).toHaveBeenCalled();
        //tambien se puede hacer preguntando cuantas veces se llamo
        expect(setCategorias).toHaveBeenCalledTimes(1);
        //tambien puedo preguntar si fue llamado son una funcion
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function))
        const input = wrapper.find('input').prop('value');
       //4.el valor del input debe estar vacio
        expect(input).toBe('');


    });
    
    
    
})
