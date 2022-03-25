import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Basket from "./Basket";
import "./Navbarstyle.css";
import About from "../Components/About";
import App from "../App"


const Nav = ({ basketItems, removeFromBasket, image }) => {
  return (
  <div>

      <BrowserRouter>
    <div className="nav">
    <Link to="App"><a href="/">Home</a></Link>
    <Link to="About"><a href="/">About</a></Link>
    <Routes>
          <Route path="../App" element={<App />} />
          <Route path="/About" element={<About />} />
        </Routes> 
      <div className="basket">
     <Basket
          basketItems={basketItems}
          removeFromBasket={removeFromBasket}
          image={image}
        />
      </div>
    </div>
    </BrowserRouter>  
  </div>
  );
};

export default Nav;