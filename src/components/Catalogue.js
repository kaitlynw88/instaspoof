import "./../styles/Catalogue.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Catalogue = (props)=>{
   
    
    return(

         <>
                
            {
                props.array.map((indImg)=>(

                    <li className="imgContainer" key={indImg.id}>
                        <img 
                        src={indImg.webImage.url}
                        alt={indImg.title}
                        />
                        <p>{indImg.title}</p>
                        <i><FontAwesomeIcon icon={faHeart} /></i>
                    </li>
                ))
            }

         </>
        
    )
    
}



export default Catalogue;