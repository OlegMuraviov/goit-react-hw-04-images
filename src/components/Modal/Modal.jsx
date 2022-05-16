import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.getElementById('modal');

const Modal = ({ modalData, toggleModal }) => {
  const handleEscape = event => {
    if (event.code === 'Escape') {
      toggleModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return createPortal(
    <div
      onClick={() => {
        toggleModal();
      }}
      className={s.overlay}
    >
      <img
        className={s.modal}
        src={modalData.largeImageURL}
        alt={modalData.tags}
      />
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  modalImage: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default Modal;
