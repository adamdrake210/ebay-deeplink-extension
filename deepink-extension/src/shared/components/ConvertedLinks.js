import React from 'react';
import PropTypes from 'prop-types';
import { svgIconCopy } from '../assets/svgs/copy';

export default function ConvertedLinks({ convertedLink, isValidUrl }) {
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
  };

  return (
    <>
      {convertedLink && (
        <div>
          <h2>Please find below your native links:</h2>
          <p>
            iOS Link: {convertedLink}{' '}
            <button
              className="clipboard-button"
              onClick={() => copyClipboard(convertedLink)}
            >
              {svgIconCopy} Copy
            </button>
          </p>
          <p>
            Android Link: {convertedLink}{' '}
            <button
              className="clipboard-button"
              onClick={() => copyClipboard(convertedLink)}
            >
              {svgIconCopy} Copy
            </button>
          </p>
          <span className="invisibleCopy" />
        </div>
      )}
      {isValidUrl && (
        <h3>This URL you have provided is not valid. Please verify it.</h3>
      )}
    </>
  );
}

ConvertedLinks.propTypes = {
  convertedLink: PropTypes.string,
  isValidUrl: PropTypes.bool,
};
