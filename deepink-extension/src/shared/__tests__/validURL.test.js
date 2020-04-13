import { validURL } from '../helpers/helpers';

test('Converts link to a native browse node link', () => {
  expect(validURL('https://www.ebay.it/')).toBe(true);
  expect(validURL('http://ebay.com')).toBe(true);
  expect(validURL('htp://ebay.co.u')).toBe(false);
  expect(validURL('hujrsu')).toBe(false);
});
