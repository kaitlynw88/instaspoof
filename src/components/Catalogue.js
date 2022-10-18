import "./../styles/Catalogue.scss";
import { useState, useEffect } from "react";


const Catalogue = (props)=>{
    const [img, setImg] = useState([])
    
    
    useEffect(()=>{
        let userImg = props.imgArray
        setImg(userImg)
        console.log(img)
    },[])
    
    return(
        <p>hello</p>
            
        
    )
    

    
}



export default Catalogue