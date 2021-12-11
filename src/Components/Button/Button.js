import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button() {
  return (
    <button type="button" className={s.button}>
      Load more
    </button>
  );
}
export default Button;

Button.propTypes = {};
