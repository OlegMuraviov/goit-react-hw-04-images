import { useEffect, useState } from 'react';
import { pixabayApi } from 'utils/pixabayApi';
import PropTypes from 'prop-types';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import s from './GalleryWrap.module.css';

const GalleryWrap = ({ query, toggleModal }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setImages([]);
    setPage(1);
    checkQuery();
  }, [query]);

  useEffect(() => {
    checkQuery();
  }, [page]);

  const checkQuery = () => {
    if (query === '') setError(new Error('Please input value'));
    else {
      getImagesFromApi();
    }
  };

  const getImagesFromApi = () => {
    setIsLoading(true);
    setError(null);

    pixabayApi({ query, page })
      .then(({ images, totalHits }) => {
        if (!images.length) {
          throw new Error('No images ');
        }
        setImages(prev => [...prev, ...images]);
        setTotal(totalHits);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={s.galleryWrap}>
      {isLoading && <Loader />}
      <ImageGallery data={images} toggleModal={toggleModal} />
      {images.length > 0 && images.length < total && (
        <Button handleLoadMore={handleLoadMore} />
      )}
      {error && <h2>{error.message}</h2>}
    </div>
  );
};

GalleryWrap.propTypes = {
  query: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default GalleryWrap;
