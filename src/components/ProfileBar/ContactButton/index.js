import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import css from './contactButton.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const ContactButton = () => {
  const [modalIsOpen, setModelIsOpen] = useState(false);

  // return (
  //   <button className={css.buttonStyle}>
  //     CONTACT
  //     <span><FaEnvelope size="1.5em" title="contact" /></span>
  //   </button>
  // );

  return (
    <div>
      <button className={css.buttonStyle} onClick={() => setModelIsOpen(true)}>
        CONTACT
        <span>
          <FaEnvelope size="1.5em" title="contact" />
        </span>
      </button>
      <Modal  isOpen={modalIsOpen} onRequestClose={() => setModelIsOpen(false)}>
        <div className={css.modal}>
          <h1>Contact School of Code</h1>
          <p>Luis Rodrigues</p>
          <div>
          <button className={css.buttonModal} onClick={() => setModelIsOpen(false)}>Close!</button>
        </div>
        </div>
        
      </Modal>
    </div>
  );
};

export default ContactButton;
