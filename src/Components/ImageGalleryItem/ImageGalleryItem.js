import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={src} alt={alt} className={s.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
