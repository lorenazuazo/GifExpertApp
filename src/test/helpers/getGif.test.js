import React from 'react';
import { getGif } from '../../helpers/getGif'

describe('Test al componente getGif fetch', () => {
    
    test('el getGif debera traer 10 elementos',async () => {
        const gif = await getGif('One Punch');
        expect(gif.length).toBe(10);
    });
    
    test('el getGif no debera traer elementos si no tiene parametros ', async() => {

        const gif = await getGif('');
        expect(gif.length).toBe(0)
    })
    

})
