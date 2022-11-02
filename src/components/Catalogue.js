import "./../styles/Catalogue.scss";
import Counter from "./Counter";
import Comments from "./Comments";


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
                        <div className="infoContainer">
                            <div className="title">
                                <p>{indImg.title}</p>
                                <div>
                                    <Counter imageKey={indImg}/>
                                </div>

                            </div>
                            <Comments/>
                        </div>
                    </li>
                ))
            }

         </>
        
    )
    
}



export default Catalogue;