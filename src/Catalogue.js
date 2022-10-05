import axios from "axios";
import { useEffect } from "react";

const Catalogue = ()=>{
    useEffect( ()=>{
        // make an AJAX Call to the reiksmusuem API

        axios({
            url:"https://www.rijksmuseum.nl/api/nl/collection/SK-C-5",
            params:{
                key: "MWXSYrhN",
                language: "en",
            }
        }).then((response) =>{
            console.log(response)
        })

    })

    return(
        <p>
            this is a response
        </p>
    )
}


export default Catalogue