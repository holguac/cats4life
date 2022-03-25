
import Basket from "./Basket";

const Nav = ({ basketItems, removeFromBasket, image }) => {
  return (
    <div className="nav">
      <h1>Cats4Lyf</h1>
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