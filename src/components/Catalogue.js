import "./../styles/Catalogue.scss";
import { useState, useEffect } from "react";


const Catalogue = (props)=>{
    
    return(
         <ul>
            {
                props.array.map((indImg)=>(

                    <li>
                        <img src={indImg.webImage.url}/>
                    </li>
                ))
            }

            {/* <p>hello</p> */}
            

         </ul>
        
    )
    

    
}



export default Catalogue