import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initial = screen.getByTestId("count");
  expect(initial).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByRole('button', { name: '+' });
  fireEvent.click(increment);
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrement);
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toHaveTextContent('-1');
});
