
import Basket from "./Basket";
import "./Navbarstyle.css"

const Nav = ({ basketItems, removeFromBasket, image }) => {
  return (
    <div className="nav">
     <a href="/">Home</a>
  <a href="/">About</a>
   
      <div className="basket">
     <Basket
          basketItems={basketItems}
          removeFromBasket={removeFromBasket}
          image={image}
        />
    
      </div>
    </div>
  );
};

export default Nav;