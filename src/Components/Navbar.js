
import Basket from "./Basket";
import "./Navbarstyle.css"

const Nav = ({ basketItems, removeFromBasket, image }) => {
  return (
    <div className="nav">
      <h1>Cats4Lyf</h1>
      <h2>Adopt a furry friend today!</h2>
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