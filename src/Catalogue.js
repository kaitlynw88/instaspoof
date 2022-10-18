import axios from "axios";
import { useState,useEffect } from "react";

const Catalogue = ()=>{

    // get Artist names
    const [images, setImages] = useState([])
    useEffect( ()=>{
        // make an AJAX Call to the reiksmusuem API
        
        axios({
            url:"https://www.rijksmuseum.nl/api/nl/collection",
            params:{
                key: "MWXSYrhN",
                imgonly: true,
                ps:50,
                q: "woman"
            }
        }).then((response) =>{
            setImages(response.data.artObjects)
            console.log(response.data.artObjects)
        })
    }, [])
    
    return(
        <ul>
            {
                images.map((image)=>(
                    <li>
                        <p>This is an image made by {image.principalOrFirstMaker}</p>
                        <img src={image.webImage.url}/>
                    </li>
                ))    
            }
        </ul>
        
       
    )
    
}



export default Catalogue