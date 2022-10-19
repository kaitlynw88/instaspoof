import "./../styles/Header.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Catalogue from "./Catalogue";

const Header =(props)=>{

    let artists = props.artist;

    const[userArtist, setUserArtist] =useState()
    const [userImg, setUserImg] = useState()

    // add an event listener on the option selected
    const handleChange =(e)=>{
        e.preventDefault()
        setUserArtist(e.target.value)
    }
    
    useEffect(() => {
        axios({
            url: "https://www.rijksmuseum.nl/api/nl/collection",
            params: {
                key: "MWXSYrhN",
                imgonly: true,
                ps: 50,
                s:userArtist
            }
        }).then((response) => {
            setUserImg(response.data.artObjects)
            return 
        })
    }, [userArtist])
    
    return(
        <>
            <h1>Instaspoof</h1>
            
            <select onChange={e =>handleChange(e)}>
                {
                    artists.map((artist) => 
                    <option>{artist}</option>
                    )
                }
                
            </select>
            <ul>
                <Catalogue array={userImg}/>
                
            </ul>
            
        </>
    
    )
}
export default Header