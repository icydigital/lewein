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
  const LeweinGif = document.querySelector('.leweinChampionGif'); // Check for element existence first
  expect(LeweinGif).toBeInTheDocument();
  expect(LeweinGif).toBeVisible();
});