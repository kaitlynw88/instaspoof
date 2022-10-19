import './app.scss';
import axios from "axios";
import { useState, useEffect } from "react";
import Catalogue from './components/Catalogue';
import Header from './components/Header';

function App() {

  // get Artist names
  const [images, setImages] = useState([])
  useEffect(() => {
    // make an AJAX Call to the reiksmusuem API

    axios({
      url: "https://www.rijksmuseum.nl/api/nl/collection",
      params: {
        key: "MWXSYrhN",
        imgonly: true,
        ps: 50
      }
    }).then((response) => {
      setImages(response.data.artObjects)
    })
  }, [images])
  
  let artistArray = []
  images.map((image) => {
    if(!artistArray.includes(image.principalOrFirstMaker)){
      artistArray.push(image.principalOrFirstMaker)
    }
  })
  
  return (
    <div className="App">
        <Header artist={artistArray}/>
    </div>
    
  );
}

export default App;
