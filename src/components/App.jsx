import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import GalleryWrap from './GalleryWrap/GalleryWrap';
import Modal from './Modal/Modal';
import s from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const onSubmitSearch = newQuery => {
    setQuery(newQuery);
  };

  const toggleModal = (modalData = null) => {
    setIsModalOpen(prev => !prev);
    setModalImage(modalData);
  };

  return (
    <div className={s.app}>
      <Searchbar onSubmitSearch={onSubmitSearch} />
      <GalleryWrap query={query} toggleModal={toggleModal} />
      {isModalOpen && (
        <Modal modalData={modalImage} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default App;
