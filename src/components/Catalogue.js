import "./../styles/Catalogue.scss";
import { useState, useEffect } from "react";


const Catalogue = (props)=>{
    const [img, setImg] = useState([])

    let userImg = props.array
    
    useEffect(()=>{
        setImg(userImg)
        console.log(img)
    },[userImg])

    
    
    
    return(
        
          <ul>
            
            {
                img.map((indImg)=>(
                    <img src={indImg.webImage.url}/>
                ))
            }
            

          </ul>  
        
    )
    

    
}



export default Catalogue