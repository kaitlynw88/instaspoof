import "./../styles/Catalogue.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";

const Catalogue = (props)=>{
    const [isActive, setActive] = useState("false");

    const handleClick = function(){
        setActive(!isActive)
    }
    
    return(
         <>
            
            {
                props.array.map((indImg)=>(

                    <li className="imgContainer" key={indImg.id}>
                        <img 
                        src={indImg.webImage.url}
                        alt={indImg.title}
                        onClick= {handleClick}
                        />
                        <div className="infoContainer">
                            <p>{indImg.title}</p>
                            <i><FontAwesomeIcon icon={faHeart} /></i>
                        </div>
                    </li>
                ))
            }

         </>
        
    )
    
}



export default Catalogue;