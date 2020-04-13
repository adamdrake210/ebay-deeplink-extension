import React from 'react';

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
