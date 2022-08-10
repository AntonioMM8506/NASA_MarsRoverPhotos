import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';


test('Title', () => {
  render(<App/>);
  const title = screen.getByTestId("title");

  expect(title).toHaveTextContent("Mars Rover Photos");
});
