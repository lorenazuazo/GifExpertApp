import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from './useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas a useFetchGifs - custom hooks', () => {
    
    test('debe de retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
        const {data,loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBeTruthy;

    });

    test('debe de retornar un arreglo de imagenes u el loading el false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const {data,loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy;
    });
    
    
})
