import Nav from "./Components/Navbar";
import Card from "./Components/Card";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import faker from "faker";
import "./App.css";

const App = () => {
  const [cats, setCats] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=12"
      );
      if (response.status !== 200) throw new Error("Unable to fetch Data");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("Error fetching Data");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let catData = await fetchImages();
      catData = catData.map((cat) => {
        cat.name = faker.name.firstName();
        cat.breed = faker.animal.cat();
        cat.city = faker.address.city();
        cat.price = faker.commerce.price();
        return cat;
      });
      setCats(catData);
    };

    fetchData();
  }, []);

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  };

  const removeFromBasket = (item) => {
    const remainingBasketItems = basketItems.filter(
      (cat) => cat.id !== item.id
    );
    setBasketItems(remainingBasketItems);
  };

  return (
    <div className="App">
      
      <Nav
        basketItems={basketItems}
        removeFromBasket={removeFromBasket}
        image={cats.image}
      />
      <Main />
      <div className="container">
        {cats.map((cat, i) => (
          <Card
            name={cat?.name}
            price={cat?.price}
            image={cat.url}
            key={i}
            id={cat.id}
            addToBasket={addToBasket}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default App;