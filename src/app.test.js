import React from 'react';
import {render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

import {fetchMissions as mockFetchMissions} from './api/fetchMissions'
jest.mock('./api/fetchMissions')

test('renders App without errors', () => {
   render(<App/>)
})

test('renders mission data when button is clicked', async () => {
   mockFetchMissions.mockResolvedValueOnce({
      data: [
         {mission_name:'Mission 1', mission_id: 'mission 1'}, 
         {mission_name: 'Mission 2', mission_id: 'mission 2'}
      ]
   })   

   render(<App/>)

   const button = screen.getByRole('button')
   userEvent.click(button) 

   await waitFor(() => {
      expect(screen.getAllByTestId('mission')).toHaveLength(2)
   }) 
})