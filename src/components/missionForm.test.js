import React from 'react';
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MissionForm from './MissionForm'

test('MissionForm renders without errors', () => {
   render(<MissionForm/>)
})

test('renders a message when isFetchingData is true', () => {
   //Arrange:
   render(<MissionForm isFetchingData={true}/>) 

   //Act - query (look) for text 'we are fetching data':
   const message = screen.queryByText(/we are fetching data/i)

   //Assertion - 'we are fetching data' exists on the page:
   expect(message).not.toBeNull()
   expect(message).toBeInTheDocument()
})

test('renders the button when isFetchingData is false', () => {
   //Arrange:
   render(<MissionForm isFetchingData={false}/>)

   //Act:
   const button = screen.getByRole('button',{name: /get data/i} )

   //Assert:
   expect(button).toBeInTheDocument()
})

test('calls getData when the button is pressed', () => {
   //Making a mock function:
   const fakeGetData = jest.fn()

   //Arrange:
   render(<MissionForm isFetchingData={false} getData={fakeGetData}/>)

   //Act:
   const button = screen.getByRole('button', {name: /get data/i})
   userEvent.click(button)

   //Assert:
   expect(fakeGetData).toBeCalled()
   expect(fakeGetData.mock.calls.length).toBe(1)
   expect(fakeGetData.mock.calls).toHaveLength(1)
   expect(fakeGetData).toHaveBeenCalled()
   expect(fakeGetData).toHaveBeenCalledTimes(1)
})