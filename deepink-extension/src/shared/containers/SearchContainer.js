import React, { useState } from 'react';
import InputField from '../components/InputField';
import ConvertedLinks from '../components/ConvertedLinks';
import { nativeLinkConverter, validURL } from '../helpers/helpers';

function SearchContainer() {
  const [inputValue, setInputValue] = useState('');
  const [convertedLink, setConvertedLink] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);

  const handleInputValue = e => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleUrlConversion = () => {
    if (validURL(inputValue)) {
      const nativeLink = nativeLinkConverter(inputValue);
      console.log(nativeLink);
      setConvertedLink(nativeLink);
      setIsValidUrl(false);
    } else {
      setIsValidUrl(true);
    }
  };

  return (
    <div>
      <InputField
        handleInputValue={handleInputValue}
        handleUrlConversion={handleUrlConversion}
      />
      <ConvertedLinks convertedLink={convertedLink} isValidUrl={isValidUrl} />
    </div>
  );
}

export default SearchContainer;
