//Components
import './App.css';
import logo from './components/img/NASA_logo.png';
import Footer from './components/footer';
//services
import React, { useState } from 'react';
import { GetPhotos } from './services/nasaServices';


function App() {

  //Hooks
  const [fhazDisplayed, setFHAZDisplayed] = useState(false); //fhaz
  const [rhazDisplayed, setRHAZDisplayed] = useState(false); //rhaz
  const [mastDisplayed, setMASTDisplayed] = useState(false); //mast
  const [chemcamDisplayed, setCHEMCAMDisplayed] = useState(false); //chemcam
  const [mahliDisplayed, setMAHLIDisplayed] = useState(false); //mahli
  const [mardiDisplayed, setMARDIDisplayed] = useState(false); //mardi
  const [navcamDisplayed, setNAVCAMDisplayed] = useState(false); //navcam


  //Render ..........................................................................
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} alt='logo' className="App-logo"></img>
        <h1 data-testid="title" className='App-title'>Mars Rover Photos</h1>
      </header>

    <table className="table">
      <tbody>
        <tr>
          <th className="table-row1">Curiosity Cameras</th>
          <th className="table-row2">Pictures</th>
        </tr>

        {/*FHAZ*/}
        <tr>
          <td><button onClick={() => setFHAZDisplayed(true)} className={fhazDisplayed ? 'button-s':''}>
              Front Hazard Avoidance Camera</button></td>
          { fhazDisplayed ?(<td><GetPhotos name='fhaz'></GetPhotos></td>) : (<td></td>) }
        </tr>

        {/*RHAZ*/}
        <tr className=".table-row2">
          <td><button onClick={() => setRHAZDisplayed(true)} className={ rhazDisplayed ? 'button-s':''}>
              Rear Hazard Avoidance Camera</button></td>
          { rhazDisplayed ?(<GetPhotos name='rhaz'></GetPhotos>) : (<td></td>) }
        </tr>

        {/*MAST*/}
        <tr>
          <td><button onClick={() => setMASTDisplayed(true)} className={ mastDisplayed ? 'button-s':''}>
              Mast Camera</button></td>
          { mastDisplayed ?(<td><GetPhotos name='mast'></GetPhotos></td>) : (<td></td>) }
        </tr>

        {/*CHEMCAM*/}
        <tr>
          <td><button onClick={() => setCHEMCAMDisplayed(true)} className={ chemcamDisplayed ? 'button-s':''}>
              Chemistry and Camera Complex</button></td>
          { chemcamDisplayed ?(<td><GetPhotos name='chemcam'></GetPhotos></td>) : (<td></td>) }
        </tr>

        {/*MAHLI*/}
        <tr>
          <td><button onClick={() => setMAHLIDisplayed(true)} className={ mahliDisplayed ? 'button-s':''}>
              Mars Hand Lens Imager</button></td>
          { mahliDisplayed ?(<td><GetPhotos name='mahli'></GetPhotos></td>) : (<td></td>) }
        </tr>

        {/*MARDI*/}
        <tr>
          <td><button onClick={() => setMARDIDisplayed(true)} className={ mardiDisplayed ? 'button-s':''}>
              Mars Descent Imager</button></td>
          { mardiDisplayed ?(<td><GetPhotos name='mardi'></GetPhotos></td>) : (<td></td>) }
        </tr>

        {/*NAVCAM*/}
        <tr>
          <td><button onClick={() => setNAVCAMDisplayed(true)} className={ navcamDisplayed ? 'button-s':''}>
              Navigation Camera</button></td>
          { navcamDisplayed ?(<td><GetPhotos name='navcam'></GetPhotos></td>) : (<td></td>) }
        </tr>
      </tbody>
    </table> {/* End of Table*/}

    <Footer></Footer>
    </div>
  );
}//End of App

export default App;
