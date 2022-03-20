import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has correct initial color', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(button.textContent).toBe('Change to Medium Violet Red')
});

test('initial conditions ', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(button).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('checkbox', () => {
  render(<App />)
  const button = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

})

describe('Test camel case color name', () => {
  test('works with no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('works with one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('works with multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})