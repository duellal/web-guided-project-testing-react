import React from 'react';
import {render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MissionsList from './MissionsList'

const missions = [
   {mission_name: 'Thaicom', mission_id: '9D1B7E0'},
   {mission_name: 'Telstar', mission_id: 'F4F83DE'}
]

test('renders without error', () => {
   render(<MissionsList missions={missions}/>)
})

test('renders change in missions list correctly', () => {
   const {rerender} = render(<MissionsList missions={[]}/>)

   let missionObj = screen.queryAllByTestId('mission')
   expect(missionObj).toStrictEqual([])
   expect(missionObj).toHaveLength(0)

   rerender(<MissionsList missions={missions}/>)

   missionObj = screen.queryAllByTestId('mission')
   expect(missionObj).toHaveLength(2)
})