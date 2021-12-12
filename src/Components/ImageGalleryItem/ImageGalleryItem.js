import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt, onClick, id }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        id={id}
        src={src}
        alt={alt}
        onClick={onClick}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
