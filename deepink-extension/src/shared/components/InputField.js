import React from 'react';
import PropTypes from 'prop-types';

export default function InputField({ handleInputValue, handleUrlConversion }) {
  return (
    <div>
      <input placeholder="Enter url here..." onChange={handleInputValue} />
      <button type="button" onClick={handleUrlConversion}>
        Create Deeplink
      </button>
    </div>
  );
}

InputField.propTypes = {
  handleInputValue: PropTypes.func,
  handleUrlConversion: PropTypes.func,
};
