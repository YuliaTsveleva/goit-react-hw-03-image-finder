import React from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

// Your API key: 24048830-4cc4486dcdd2cd17ebea2a9c8

function Searchbar({ onSubmit }) {
  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={this.onSubmit}>
        <button type="submit" class="button">
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
