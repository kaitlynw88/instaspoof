import "./../styles/Catalogue.scss";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Catalogue = (props)=>{
    const [likes, setLikes] = useState("")
    
    console.log(props)
    



    return(

         <>
                
            {
                props.array.map((indImg)=>(

                    <li className="imgContainer">
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