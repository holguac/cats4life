import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from "react";
import Card from "../Components/Card"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


function ModalBasket() {
  let subtitle;
  const [cardIsOpen, setIsOpen] = useState(false);

  function openCard() {
    setIsOpen(true);
  }

  function afterOpenCard() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeCard() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openCard}>ADD TO BASKET</button>
      <Modal
        isOpen={cardIsOpen}
        onAfterOpen={afterOpenCard}
        onRequestClose={closeCard}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <p>THIS IS THE BASKET </p>
          
      </Modal>
    </div>
  );
}

export default ModalBasket