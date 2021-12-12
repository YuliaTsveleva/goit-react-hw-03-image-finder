import React from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ toClose, src, alt }) {
  return (
    <div className={s.Overlay} onClick={toClose}>
      <div className={s.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  toClose: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};
