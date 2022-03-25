import Modal from "react-modal";
import { useState } from "react";
import { BsBasket } from "react-icons/bs"
import "./Basketstyle.css"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
  
    transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement("./Basket");

const Basket = ({ basketItems, removeFromBasket }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const Total = basketItems.reduce((accumulator, currentItem) => {
    accumulator += parseFloat(currentItem.price);
    return accumulator;
  }, 0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="basket">
        <button className="icon" onClick={openModal}><BsBasket/></button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>

        {basketItems.map((item) => (
          <>
            <div key={item.name} className="modal-container">
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Shopping Basket
              </h2>
              <h3>Cats</h3>
              <img src={item.image} alt="" />
              <h2>{item.name}</h2>
              <p>£{item.price}</p>
              <button
                onClick={() => {
                  removeFromBasket(item);
                }}
              >
                x
              </button>
            </div>
          </>
        ))}

        <h4 className="total"> Total Cost: £{Total.toFixed(2)}</h4>
      </Modal>
    </div>
  );
};

export default Basket;