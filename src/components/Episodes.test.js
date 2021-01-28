import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from "./Episodes";



test('1st render, no epds displayed', ()=>{
   render(<Episodes episodes={[]} />);

   const episode = screen.getByText(/episodes/i);
   expect(episode).not.toBeInTheDocument();

});