import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from './ContactForm'

test('renders', () => {
    render(<ContactForm />)
})

test('correctly entering data correctly submits', async () => {
    const {findAllByText, getByLabelText, getAllByDisplayValue, getByDisplayValue, getByTestId, getByText, getByRole } = render(<ContactForm />)

    //inputs
    const firstName = getByLabelText(/first name/i)
    const lastName = getByLabelText(/last name/i)
    const email = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)

    //hello are you there
    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(message).toBeInTheDocument()


    //fill inputs
    fireEvent.change(firstName, { target: { value: 'Ian' } })
    fireEvent.change(lastName, { target: { value: 'Mcelroy' } })
    fireEvent.change(email, { target: { value: 'dude@whatever.com' } })
    fireEvent.change(message, { target: { value: 'I am a robot' } })

    expect(getAllByDisplayValue(/Ian/i)[0]).toBeInTheDocument()
    expect(getByDisplayValue(/mcelroy/i)).toBeInTheDocument()
    expect(getByDisplayValue(/dude@whatever.com/i)).toBeInTheDocument()
    expect(getByDisplayValue(/i am a robot/i)).toBeInTheDocument()

    //submit button
    const submitButton = getByTestId('submit')


    fireEvent.click(submitButton)

     await waitFor(() => {
         expect(getByText(/ian/i)).toBeInTheDocument()
     })

})