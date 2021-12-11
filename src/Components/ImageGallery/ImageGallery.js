import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import ErrorView from '../ErrorView/ErrorView';
import Loader from '../Loader/Loader';
import PreView from '../PreView/PreView';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.imageName;
    const newQuery = this.props.imageName;
    if (prevQuery !== newQuery) {
      this.setState({
        status: 'pending',
        page: 1,
        images: [],
      });
      this.fetchImages();
    }
  }

  toSetPage = () => {
    this.setState(prevState => {
      if (this.state.images.length > 1) {
        return { page: prevState.page };
      }
    });
  };

  loadMore = () => {
    this.toSetPage();
    this.fetchImages();
  };

  fetchImages = () => {
    const newQuery = this.props.imageName;
    const page = this.state.page;
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${newQuery}&page=1&key=24048830-4cc4486dcdd2cd17ebea2a9c8&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`No image with this name ${newQuery}`),
          );
        })
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

          this.setState(prevState => {
            return {
              images: [...prevState.images, ...images],
              status: 'resolved',
              page: prevState.page + 1,
            };
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }, 1000);
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <PreView />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery}>
            {images &&
              images.map(image => (
                <ImageGalleryItem
                  key={image.id}
                  src={image.webformatURL}
                  alt={image.tags}
                />
              ))}
          </ul>
          {images.length > 0 && <Button loadMore={this.loadMore} />}
        </>
      );
    }
  }
}

export default ImageGallery;
