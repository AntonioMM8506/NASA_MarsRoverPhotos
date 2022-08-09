import axios from 'axios';
import React, { useEffect, useState } from 'react';


export function GetPhotos(props){
    const [ cameraPhotos, setCameraPhotos] = useState([]);
    const [retrievedPhotos, setRetrievedPhotos] = useState([]);
    const [eMessage, setEMessage] = useState('');
    
    useEffect(() =>{
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&z&camera=${props.name}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then( res => {
                setCameraPhotos(res.data);
                setRetrievedPhotos((cameraPhotos.photos.length>21) ? cameraPhotos.photos.slice(0,20) : cameraPhotos.photos);
                //console.log("res", res);
                //console.log("Photos", cameraPhotos);
                //console.log("Retrieved", retrievedPhotos);
            })
            .catch( err => {
                if(err.code === 'ERR_BAD_REQUEST'){
                    setEMessage('Sorry. Try again later.')
                }
            })
    }, [cameraPhotos, retrievedPhotos, props.name, eMessage]);

    
    let cols = [];
    for(let j=0; j<retrievedPhotos.length; j++){
        cols.push(<td><img key={retrievedPhotos[j].id} src={retrievedPhotos[j].img_src} 
            width='100%' height='120px' alt="img"></img></td>)
    }                    
    

    let m = 1;
    let rows = [];
    let temp = [];
    while(m<=retrievedPhotos.length){
        temp.push(cols[m-1]);
        m++;

        if(m%5===0 || m===retrievedPhotos.length){
            rows.push(<tr>{temp}</tr>);
            temp = [];
        }
    }

    return(
        
            <table>
                <tbody>
                    { retrievedPhotos.length ? rows : eMessage.length ?<tr><td>{eMessage}</td></tr> :<tr><td><span>Loading...</span></td></tr> }
                </tbody>
            </table>
        
    )

}//End of GetPhotos

