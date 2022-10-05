import axios from "axios";
import { useState,useEffect } from "react";

const Catalogue = ()=>{

    // get Artist names
    const [artists, setArtists] = useState([])
    useEffect( ()=>{
        // make an AJAX Call to the reiksmusuem API
        
        axios({
            url:"https://www.rijksmuseum.nl/api/nl/collection",
            params:{
                key: "MWXSYrhN",
                imgonly: true
            }
        }).then((response) =>{
            setArtists(response.data.artObjects)
            console.log(response.data.artObjects)
        })
    }, [])
    
    return(
        <select>
            {
                artists.map((artist) => (
                    <option key = {artist.id} value = {artist.id}>{artist.principalOrFirstMaker}</option>
                ))
            }
        </select>
        )
}



export default Catalogue