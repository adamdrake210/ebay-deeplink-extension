import React, { useState } from 'react';
import InputField from '../components/InputField';
import ConvertedLinks from '../components/ConvertedLinks';

function SearchContainer() {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = e => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleUrlConversion = () => {
    console.log('Converted!');
  };

  return (
    <div>
      <InputField
        handleInputValue={handleInputValue}
        handleUrlConversion={handleUrlConversion}
      />
      <ConvertedLinks />
    </div>
  );
}

export default SearchContainer;
