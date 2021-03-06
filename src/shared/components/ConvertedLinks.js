import React from 'react';
import PropTypes from 'prop-types';
import { svgIconCopy } from '../assets/svgs/copy';

export default function ConvertedLinks({
  convertedLink,
  isValidUrl,
  copied,
  setCopied,
}) {
  const copyClipboard = url => {
    const copyHere = document.createElement('textarea');
    copyHere.id = 'clipboardContent';
    const table = document.querySelector('.invisibleCopy');
    table.appendChild(copyHere);
    const copyText = document.getElementById('clipboardContent');
    copyText.value = url;
    copyText.select();
    document.execCommand('copy');
    copyText.remove();
    setCopied(true);
  };

  return (
    <div className="convertedlinks-container">
      {convertedLink && (
        <div className="convertedlinks-text">
          {copied && <p className="copied">Copied!</p>}
          {!copied && (
            <button
              className="clipboard-button copy-btn"
              onClick={() => copyClipboard(convertedLink)}
            >
              {svgIconCopy}
            </button>
          )}
          <p>{convertedLink} </p>
          <span className="invisibleCopy" />
        </div>
      )}
      {isValidUrl && (
        <p>This URL you have provided is not valid. Please verify it.</p>
      )}
      {!convertedLink && !isValidUrl && (
        <p>The native link will appear here...</p>
      )}
    </div>
  );
}

ConvertedLinks.propTypes = {
  convertedLink: PropTypes.string,
  isValidUrl: PropTypes.bool,
  copied: PropTypes.bool,
  setCopied: PropTypes.func,
};
