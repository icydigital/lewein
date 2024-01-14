import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lewein Homepage link', () => {
  render(<App />);
  const LeweinHeader = screen.getByText(/Lewein/i);
  expect(LeweinHeader).toBeInTheDocument();
});
