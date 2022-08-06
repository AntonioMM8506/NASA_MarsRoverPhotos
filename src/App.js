import './App.css';
import logo from './components/img/NASA_logo.png';
import React from 'react';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' className="App-logo"></img>
        <h1>Mars Rover Photos</h1>
      </header>

    <table className="table">
      <tbody>
        <tr>
          <th className=".table-row1">Curiosity Cameras</th>
          <th className=".table-row2">Pictures</th>
        </tr>

        <tr>
          <td><a href= "https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/">Front Hazard Avoidance Camera</a></td>
          <td></td>
        </tr>

        <tr>
          <td><a href="https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/">Rear Hazard Avoidance Camera</a></td>
          <td></td>
        </tr>

        <tr>
          <td><a href="https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/">Mast Camera</a></td>
          <td></td>
        </tr>

        <tr>
          <td><a href="https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/">Chemistry and Camera Complex</a></td>
          <td></td>
        </tr>

        <tr>
          <td><a href="https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/">Mars Hand Lens Imager</a></td>
          <td></td>
        </tr>

        <tr>
          <td><a href="https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/">Mars Descent Imager</a></td>
          <td></td>
        </tr>

        <tr>
          <td><a href="https://AntonioMM8506.github.io/NASA_MarsRoverPhotos/">Navigation Camera</a></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <Footer></Footer>
    </div>
  );
}//End of App

export default App;
