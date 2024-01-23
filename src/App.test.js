import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lewein Homepage link', () => {
  render(<App />);
  const LeweinHeader = document.querySelector('.leweinLinkHeader'); // Check for element existence first
  expect(LeweinHeader).toBeInTheDocument();
  expect(LeweinHeader).toBeVisible();
});

test('renders Lewein Video Header', () => {
  render(<App />);
  const LeweinVideo = document.querySelector('.leweinVideo'); // Check for element existence first
  expect(LeweinVideo).toBeInTheDocument();
  expect(LeweinVideo).toBeVisible();
});