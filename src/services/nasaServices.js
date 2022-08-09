import REACT_APP_KEYS from './env.json';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export function GetPhotos(props){
    const [ cameraPhotos, setCameraPhotos] = useState([]);
    const [retrievedPhotos, setRetrievedPhotos] = useState([]);
    
    useEffect(() =>{
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&z&camera=${props.name}&api_key=${REACT_APP_KEYS.NASA_API_KEY}`)
            .then( res => {
                setCameraPhotos(res.data);
                setRetrievedPhotos((cameraPhotos.photos.length>21) ? cameraPhotos.photos.slice(0,20) : cameraPhotos.photos);
                //console.log("res", res);
                //console.log("Photos", cameraPhotos);
                //console.log("Retrieved", retrievedPhotos);
            })
            .catch( err => {
                console.log(err);
            })
    }, [cameraPhotos, retrievedPhotos, props.name]);

    
    let cols = [];
    for(let j=0; j<retrievedPhotos.length; j++){
        cols.push(<td><img src={retrievedPhotos[j].img_src} width='100px' height='100px' alt="img"></img></td>)
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
        <div>
            <table>
                <tbody>
                    { retrievedPhotos.length ? rows : <span>Loading...</span> }
                </tbody>
            </table>
        </div>
    )

}//End of GetPhotos

