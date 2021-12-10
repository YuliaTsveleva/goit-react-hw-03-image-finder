import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

function ImageGallery() {
  return (
    <ul className={s.gallery}>{/* <!-- Набор <li> с изображениями --> */}</ul>
  );
}

ImageGallery.propTypes = {};
