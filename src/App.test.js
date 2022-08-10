import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';


test('Title', () => {
  render(<App/>);
  const title = screen.getByTestId("title");
  expect(title).toHaveTextContent("Mars Rover Photos");

});//End of test Title


test('Buttons', () =>{
  render(<App/>);
  const buttonFHAZ = screen.getByTestId("button_fhaz");//fhaz
  const buttonRHAZ = screen.getByTestId("button_rhaz");//rhaz
  const buttonMAST = screen.getByTestId("button_mast");//mast
  const buttonCHEMCAM = screen.getByTestId("button_mast");;//chemcam
  const buttonMAHLI = screen.getByTestId("button_mast");;//mahli
  const buttonMARDI = screen.getByTestId("button_mast");;//mardi
  const buttonNAVCAM = screen.getByTestId("button_mast");;//navcam

  expect(buttonFHAZ).toHaveTextContent("Front Hazard Avoidance Camera");
  expect(buttonRHAZ).toHaveTextContent("Rear Hazard Avoidance Camera");
  expect(buttonMAST).toHaveTextContent("Mast Camera");
  expect(buttonCHEMCAM).toHaveTextContent("Chemistry and Camera Complex");
  expect(buttonMAHLI).toHaveTextContent("Mars Hand Lens Imager");
  expect(buttonMARDI).toHaveTextContent("Mars Descent Imager");
  expect(buttonNAVCAM).toHaveTextContent("Navigation Camera");

});//End of test Buttons

