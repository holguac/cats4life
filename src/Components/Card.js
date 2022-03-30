import "./Cardstyle.css"

const Card = ({ name, image, price, id, i, addToBasket }) => {
  const onClick = () => {
    addToBasket({ name, image, price, id });
  };
  return (
    <div className="App">
      <div key={i} >
        <img src={image} alt="img" />
        <p>{name}</p>
        <p>£{price}</p>
        <button onClick={onClick}> Add to cart</button>
      </div>
    </div>
  );
};

export default Card;