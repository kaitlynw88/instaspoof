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
            //update our "art" state with the response from the API
            setUserImages(response.data.artObjects);
            // setIsLoading(false)
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
                       
            <ul>
                <h2>{userArtist}</h2>
                <Catalogue array={userImages}/>
            </ul>
            
        </div>
    
    )
}
export default Header