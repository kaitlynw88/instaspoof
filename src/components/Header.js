import "./../styles/Header.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Catalogue from "./Catalogue";

const Header =(props)=>{

    let artists = props.artist;

    const[userArtist, setUserArtist] =useState("")
    const [userImages, setUserImages] = useState([])

    // add an event listener on the option selected
    const handleChange =(e)=>{
        e.preventDefault()
        setUserArtist(e.target.value)
    }

    useEffect(() => {

        axios({
            url: "https://www.rijksmuseum.nl/api/en/collection",
            method: "GET",
            dataResponse: "JSON",
            params: {
                key: "MWXSYrhN",
                imgonly: true,
                format: "JSON",
                involvedMaker: userArtist
            }
        }).then((response) => {
            setUserImages(response.data.artObjects);
            
        })

    }, [userArtist])
    
    return(
        <div className="body">
            <header>
                <nav>
                    <h1>Instaspoof</h1>
            
                    <select onChange={e =>handleChange(e)}>
                        
                        {
                            artists.map((artist, index) => 
                            <option key={index}>{artist}</option>
                            )
                        }
                    </select>
                </nav>
            </header>
            <div className="bodyContainer">
                <h2>{userArtist}</h2>   
                <ul>
                    <Catalogue array={userImages}/>
                </ul>
            </div>      
            
        </div>
    
    )
}
export default Header