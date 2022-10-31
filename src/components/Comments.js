import "./../styles/Comments.scss";
import { useState, useEffect } from "react";

const Comments = (props)=>{
    const [userComment, setUserComment] = useState([])

    const handleChange = (e)=>{
        console.log(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserComment(e.target.value)
    }


    return(
        <>
            <input type="text" placeholder="comments here!" onChange={handleChange} onClick={handleSubmit} />
            <button type="submit" >add your comment</button>
        </>
    )
}

export default Comments