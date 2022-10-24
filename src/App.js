import './app.scss';
import axios from "axios";
import { useState, useEffect } from "react";
import Header from './components/Header';

function App() {

  // get Artist names
  const [images, setImages] = useState([])
  useEffect(() => {
    // make an AJAX Call to the reiksmusuem API

    axios({
      url: "https://www.rijksmuseum.nl/api/nl/collection",
      method: "GET",
      dataResponse: "JSON",
      params: {
        key: "MWXSYrhN",
        imgonly: true,
        ps: 50,
      }
    }).then((response) => {
      setImages(response.data.artObjects)
    })
  }, [])
  
  let artistArray = []
  images.map((image) => {
    if(!artistArray.includes(image.principalOrFirstMaker)){
      artistArray.push(image.principalOrFirstMaker)
    }
    return(
      artistArray
    )
  })
  
  return (
    <div className="App">
        <Header artist={artistArray}/>
    </div>
    
  );
}

export default App;
