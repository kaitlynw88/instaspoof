import "./../styles/Comments.scss";
import { useState, useEffect } from "react";

const Comments = (props)=>{

    // on component render (use effect), get all artpiece data from firebase
    //on add comment click, take that comment and push it into firebase
    const [userComment, setUserComment] = useState("")

    const newArray = []

    const handleChange = (e)=>{
        setUserComment(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        newArray.push(userComment)
    }
    

    return(
        <>
            {
                newArray.map(comment=>{
                    return(
                        <li>{comment}</li>
                    )
                })
            }
        
            <input type="text" placeholder="comments here!" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>add your comment</button>
        </>
    )
}

export default Comments