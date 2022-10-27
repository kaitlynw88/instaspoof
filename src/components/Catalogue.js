import "./../styles/Catalogue.scss";
import Counter from "./Counter";

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

                            <p>{indImg.title}</p>
                            <Counter imageKey={indImg}/>
                        </div>
                    </li>
                ))
            }

         </>
        
    )
    
}



export default Catalogue;