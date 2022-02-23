import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders o/movies home page', () => {
  render(<App />);
  const linkElement = screen.getByText("O/Movies");
  expect(linkElement).toBeInTheDocument();
});
