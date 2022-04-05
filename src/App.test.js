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

test('button is enabled by default and when checkbox is checked the button must be disabled', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: 'Change to blue' });
  const checkboxInput = screen.getByRole('checkbox');

  expect(checkboxInput).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  
  // When checking the checkbox
  fireEvent.doubleClick(checkboxInput);
  expect(checkboxInput).not.toBeChecked();
  expect(buttonElement).toBeEnabled();

  // When checking the checkbox
  fireEvent.click(checkboxInput);
  expect(checkboxInput).toBeChecked();
  expect(buttonElement).toBeDisabled();

});
