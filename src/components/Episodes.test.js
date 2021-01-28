import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from "./Episodes";



test('1st render, no epds displayed', ()=>{
   render(<Episodes episodes={[]} />);

    // throw new Error("it is broken");

   const episodes = screen.queryAllByText(/episodes/i);
    // console.log(episodes);
   expect(episodes).toHaveLength(0);

});