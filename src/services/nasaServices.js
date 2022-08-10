import axios from 'axios';
import React, { useEffect, useState } from 'react';


const fetchData = async (camera) => {
    try{
        const response = await axios.request(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&z&camera=${camera}&api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        return response;
    }
    catch(error){ }
}//End of fetchData


export function GetPhotos(props){
    const [ cameraPhotos, setCameraPhotos] = useState([]);
    const [retrievedPhotos, setRetrievedPhotos] = useState([]);
    const [eMessage, setEMessage] = useState('');
    
    useEffect(() =>{
        fetchData(props.name)
            .then( res => {
                setCameraPhotos(res.data);
                setRetrievedPhotos((cameraPhotos.photos.length>21) ? cameraPhotos.photos.slice(0,20) : cameraPhotos.photos);
            })
            .catch( err => {
                console.clear();
                setEMessage('Sorry. Try again later.')
            })
    }, [props.name, cameraPhotos, retrievedPhotos, eMessage]); //End of useEffect

    
    
    let cols = [];
    for(let j=0; j<retrievedPhotos.length; j++){
        cols.push(<td><img key={retrievedPhotos[j].id} src={retrievedPhotos[j].img_src} 
            width='100%' height='120px' alt="img"></img></td>);
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
                { retrievedPhotos.length ? rows : eMessage.length ? <tr><td>{ eMessage }</td></tr> : 
                <tr><td><span>Loading...</span></td></tr> }
            </tbody>
        </table>
    )

}//End of GetPhotos

