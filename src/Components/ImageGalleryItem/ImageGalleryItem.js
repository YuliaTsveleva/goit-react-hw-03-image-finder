import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem() {
  return (
    <li className={s.galleryItem}>
      <img src="" alt="" />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {};
