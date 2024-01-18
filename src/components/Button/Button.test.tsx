import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

// Mocking the handleClick function
const mockHandleClick = jest.fn()

interface ButtonProps {
  label: string
  handleClick: () => void
}

// Creating test props
const testProps: ButtonProps = {
  label: 'Test Button',
  handleClick: mockHandleClick
}

describe('Button Component', () => {
  it('renders button with correct label', () => {
    const { getByText } = render(<Button {...testProps} />)
    const buttonElement = getByText('Test Button')
    expect(buttonElement).toBeInTheDocument()
  })
})
