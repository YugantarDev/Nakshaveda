import { render, screen } from '@testing-library/react'
import App from './App'

test('renders site logo', () => {
  render(<App />)
  // Get the logo link by accessible name
  const logoElement = screen.getByRole('link', { name: /Nakshaveda/i })
  expect(logoElement).toBeInTheDocument()
})
