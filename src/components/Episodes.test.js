import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from "./Episodes";



// const missions = [
//     {
//         mission_name: "Thaicom",
//         mission_id: "9D1B7E0"
//     },
//     {
//         mission_name: "Telstar",
//         mission_id: "F4F83DE"
//     }
// ];

// test('info id found', ()=>{
// const title    
// expect(title)

// });

// test('renders change in missions list correctly', ()=>{
//     const { rerender } = render(<MissionsList missions={[]}/>);

//     let missionObjects = screen.queryAllByTestId('mission');
//     expect(missionObjects).toStrictEqual([]);
//     expect(missionObjects).toHaveLength(0);

//     rerender(<MissionsList missions={missions}/>);
    
//     missionObjects = screen.queryAllByTestId('mission');
//     expect(missionObjects).toHaveLength(2);
// });