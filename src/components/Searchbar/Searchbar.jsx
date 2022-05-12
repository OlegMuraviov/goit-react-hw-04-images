import { useState } from 'react';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmitSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  return (
    <header className={s.searchbar}>
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();
          onSubmitSearch(inputValue);
        }}
      >
        <button type="submit" className={s.button}>
          <span className="button-label">Search</span>
        </button>

        <input
          onChange={onChangeInput}
          value={inputValue}
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;
