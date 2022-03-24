
import faker from "faker";
import ModalCard from "../Modal/ModalCard";
    
const Card = ({ images }) => {

    return (
        <div className="App">
          {images.map((item, index) => {
            return (
              <div key={index} id= {item.id} >
                <img src={item.url} alt="img" />
                <div id="name">{faker.name.firstName()}</div>
                <div id="cat"> {faker.animal.cat()}</div>
                <div id="price"> £{faker.commerce.price()}</div>
                <h2>{item.id}</h2> 
                <p>pass add to cart</p>
                {/* <button className="add-tocart" onClick={ModalCard}>Add to cart</button> */}
              </div>
            );
          })}
        </div>
      );
    }

export default Card;