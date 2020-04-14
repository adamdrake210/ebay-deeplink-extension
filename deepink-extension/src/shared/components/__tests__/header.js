import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('renders the header', () => {
  const { debug } = render(<Header />);
  debug();
});
