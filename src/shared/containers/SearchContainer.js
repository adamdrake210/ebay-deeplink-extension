import React, { useState } from 'react';
import SearchField from '../components/SearchField';
import ConvertedLinks from '../components/ConvertedLinks';
import UsefulLinks from '../components/UsefulLinks';
import { nativeLinkConverter, validURL } from '../helpers/helpers';

function SearchContainer() {
  const [inputValue, setInputValue] = useState('');
  const [convertedLink, setConvertedLink] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleUrlConversion = () => {
    setCopied(false);
    if (validURL(inputValue)) {
      const nativeLink = nativeLinkConverter(inputValue);
      setConvertedLink(nativeLink);
      setIsValidUrl(false);
    } else {
      setIsValidUrl(true);
      setConvertedLink('');
    }
  };

  return (
    <div>
      <div className="search-field-container">
        <h3>URL To Be Converted</h3>
        <SearchField
          handleInputValue={handleInputValue}
          handleUrlConversion={handleUrlConversion}
        />
      </div>
      <div>
        <h3>Native Link</h3>
        <ConvertedLinks
          convertedLink={convertedLink}
          isValidUrl={isValidUrl}
          copied={copied}
          setCopied={setCopied}
        />
      </div>
      <div>
        <h3>Useful Links</h3>
        <UsefulLinks />
      </div>
    </div>
  );
}

export default SearchContainer;
