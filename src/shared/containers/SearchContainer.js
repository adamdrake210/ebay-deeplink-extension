import React, { useState } from 'react';
import SearchField from '../components/SearchField';
import ConvertedLinks from '../components/ConvertedLinks';
import { nativeLinkConverter, validURL } from '../helpers/helpers';

function SearchContainer() {
  const [inputValue, setInputValue] = useState('');
  const [convertedLink, setConvertedLink] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);

  const handleInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleUrlConversion = () => {
    if (validURL(inputValue)) {
      const nativeLink = nativeLinkConverter(inputValue);
      setConvertedLink(nativeLink);
      setIsValidUrl(false);
    } else {
      setIsValidUrl(true);
    }
  };

  return (
    <div>
      <div className="search-field-container">
        <SearchField
          handleInputValue={handleInputValue}
          handleUrlConversion={handleUrlConversion}
        />
      </div>
      <div className="convertedlinks-container">
        <ConvertedLinks convertedLink={convertedLink} isValidUrl={isValidUrl} />
      </div>
    </div>
  );
}

export default SearchContainer;
