import { useState } from "react";
import { useEffect } from "react";
 import faker from "faker";

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
        <div className="App">
          {images.map((item, index) => {
            return (
              <div>
                <img key={index} src={item.url} alt="img" />
                <p>{faker.name.firstName()}</p>
                <p>{faker.animal.cat()}</p>
                <p>{faker.commerce.price()}</p>
                <button> Add to cart</button>
              </div>
            );
          })}
        </div>
      );
    };
export default Card;