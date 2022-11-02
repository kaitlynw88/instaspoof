import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import firebase from "./firebase"
import { getDatabase, ref, onValue, set, push, update } from 'firebase/database';

import { useState, useEffect } from "react";

const Counter =(props)=>{
    
    const [liked, setliked] = useState("false")
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        const database = getDatabase(firebase)
        const dbRef = ref(database)
        
        onValue(dbRef, (response) => {
            console.log(props.imageKey.id)
            const data = response.val()
            console.log(data.idRef.imageId.counter)
            setCounter(data.idRef.imageId.counter)

            if(data.idRef.imageId.counter > 0 ){
                setliked(true)
            }else{
                setliked(false)
            }
        })

    },[])


    const handleLike = (e) => {
        const counterID = localStorage.getItem(props.imageKey.id)
        const database = getDatabase(firebase)
        const dbRef = ref(database)

       setCounter(counter + 1)
        // if(counterID){
        //     alert("you already liked this image")
        // }else{
        //     setliked(true)
        //     setCounter(counter + 1)
        //     push(dbRef, counter)
        //     localStorage.setItem(props.imageKey.id, "liked" );
        // }
        console.log(counter)
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