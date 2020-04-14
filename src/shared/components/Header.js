import React from 'react';
import { ebayLogo } from '../assets/svgs/ebaylogo';

export default function Header() {
  return (
    <div className="header">
      {ebayLogo}
      <h1>Deeplink Converter</h1>
    </div>
  );
}
