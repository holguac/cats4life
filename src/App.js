import Nav from "./Components/Navbar";
import Card from "./Components/Card";
import Basket from "./Components/Basket";
import ModalCard from "./Modal/ModalCard"
import ModalBasket from "./Modal/ModalBasket";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css"

const App = () => {
  const [images, setImages] = useState([""])
  const fetchImage = async () => {
      let response = await fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=20&api_key=2ab73ab1-f5ca-4a8a-bf86-25e64a0f6abf")
      let data = await response.json()
      setImages(data)
  }
  
  useEffect(() => {
      fetchImage()
  }, [])

  return (
    <div>
      <Nav />
      <h1>Cats4Life</h1>
      <ModalCard />
      <ModalBasket />
      <Card images={images}/>
      

  </div> 
  )
};

export default App;