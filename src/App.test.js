import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import {fetchShow as mockFetchShow} from './api/fetchShow';
jest.mock('./api/fetchShow');

test('app renders without errors', ()=> {
    render(<App/>);
});

test('menu selection A', async ()=> {

    render(<App/>);

    const dropdownMenu = await screen.findByText(/select a season/i);
    
    userEvent.click(dropdownMenu);

});

test('renders shows data', async ()=> {
    mockFetchShow.mockResolvedValueOnce({
        data:[
            {id:"ASDF", 
            name:"null",
            status: "null",
            },  
            
        ]
    });

    //Arrange: render app
    render(<App />);

    //Act: get data 
    const dropdownMenu = await screen.findByText(/select a season/i);
    userEvent.click(dropdownMenu);
    
    // await waitFor(()=>{
    //     //Assert:
        expect(screen.getAllByTestId('episode')).toHaveLength(2);
    });
