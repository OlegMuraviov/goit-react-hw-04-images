import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGallery = ({ data, toggleModal }) => {
  return (
    <ul className={s.imageGallery}>
      {data.map(element => (
        <ImageGalleryItem
          key={uuidv4()}
          element={element}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array,
  toggleModal: PropTypes.func,
};
export default ImageGallery;
