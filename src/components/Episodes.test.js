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

test('Components rerenders with episodes when props change', ()=>{
    const { rerender } render(<Episodes episodes={[]} />);

    rerender(<Episodes episodes={[]} />);
 

});