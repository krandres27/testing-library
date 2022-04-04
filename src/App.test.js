import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and correct initial text', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: 'Change to blue' });
  // screen.debug(buttonElement)
  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked and  hast the proper text', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
  expect(buttonElement.textContent).toBe('Change to red');
});
