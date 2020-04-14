import React from 'react';
import PropTypes from 'prop-types';

export default function SearchField({ handleInputValue, handleUrlConversion }) {
  return (
    <div className="search-box">
      <input
        className="search-txt"
        placeholder="Enter url here..."
        type="text"
        onChange={handleInputValue}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleUrlConversion();
          }
        }}
      />
      <a href="#" className="search-link">
        <button
          type="button"
          className="search-btn"
          onClick={handleUrlConversion}
        >
          <i className="fas fa-search" />
        </button>
      </a>
    </div>
  );
}

SearchField.propTypes = {
  handleInputValue: PropTypes.func,
  handleUrlConversion: PropTypes.func,
};
