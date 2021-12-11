import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

class ImageGallery extends Component {
  state = { images: null };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.imageName;
    const newQuery = this.props.imageName;
    if (prevQuery !== newQuery) {
      fetch(
        `https://pixabay.com/api/?q=${newQuery}&page=1&key=24048830-4cc4486dcdd2cd17ebea2a9c8&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(data => data.hits)
        .then(data => {
          const images = data.map(image => {
            return {
              id: image.id,
              webformatURL: image.webformatURL,
              largeImageURL: image.largeImageURL,
              tags: image.tags,
            };
          });
          this.setState({ images: images });
        });
    }
  }

  render() {
    console.log(this.state);
    const { images } = this.state;
    return (
      <>
        <ul className={s.gallery}>
          {images &&
            images.map(image => (
              <ImageGalleryItem
                key={image.id}
                src={image.webformatURL}
                alt={image.tags}
              />
            ))}
        </ul>
        {images && <Button />}
      </>
    );
  }
}

export default ImageGallery;
