import "./../styles/Catalogue.scss";
import { useState, useEff } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Catalogue = (props)=>{
    // const [likes, setLikes] = useState("")
    
    return(

         <>
                
            {
                props.array.map((indImg)=>(

                    <li className="imgContainer" key={indImg.id}>
                        <img src={indImg.webImage.url}/>
                        <p>{indImg.title}</p>
                        <i><FontAwesomeIcon icon={faHeart} /></i>
                    </li>
                ))
            }

         </>
        
    )
    
}



export default Catalogue