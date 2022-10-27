import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

const Counter =(props)=>{
    
    const [liked, setliked] = useState("false")
    const [counter, setCounter] = useState(0)

    const handleLike = (e) => {
        const id = localStorage.getItem(props.imageKey.id)

        if(id){
            alert("you already liked this image")
        }else{
            setliked(true)
            setCounter(counter + 1)
            localStorage.setItem(props.imageKey.id, "liked" );
        }
    }
    
    
    return(

        <>
            {
                (liked === true) ? 
                <>
                    <FontAwesomeIcon 
                    icon={fasFaHeart} 
                    onClick={handleLike}/>
                    <p>{counter}</p>
                </>
                :
                <FontAwesomeIcon
                    icon={farFaHeart}
                    onClick={handleLike} />
            }
    
        </>
    )
    
}

export default Counter