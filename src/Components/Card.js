import { useState } from "react";
import { useEffect } from "react";
const Card = () => {
    const [images, setImages] = useState([""])
    const fetchImage = async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12")
        let data = await response.json()
        setImages(data)
    }

    useEffect(() => {
        fetchImage()
    }, [])
    return (
        <div>
            <div className="App">
       {images.map((item,index)=>{
           return(
              
            <img key={index} src={item.url} alt="img"/>
           
            
           )
           })
          
           }   
        
       




        </div>
        </div>
    )
    }
export default Card;