import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt }) {
  return (
    <li className={s.galleryItem}>
      <img src={src} alt={alt} />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
