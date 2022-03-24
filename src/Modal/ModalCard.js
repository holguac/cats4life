import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from "react";
import Card from "../Components/Card"


function ModalCard() {
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
      <button onClick={openCard}>READ MORE</button>
      <Modal
        isOpen={cardIsOpen}
        onAfterOpen={afterOpenCard}
        onRequestClose={closeCard}
        contentLabel="Example Modal"
      >
          <p>NAME</p>
          <p>CAT</p>
          <p>ABOUT</p>
          <p>PRICE</p>
          
      </Modal>
    </div>
  );
}

export default ModalCard