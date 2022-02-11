import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import css from './contactButton.module.css';
const ContactButton = () => {
  return (
    <button className={css.buttonStyle}>
      CONTACT
      <span><FaEnvelope size="1.5em" title="contact" /></span>
    </button>
  );
};

export default ContactButton;
