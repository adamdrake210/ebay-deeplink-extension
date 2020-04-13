import { validURL } from '../helpers';

test('Validates if strings are urls', () => {
  expect(validURL('https://www.ebay.it/')).toBe(true);
  expect(validURL('http://ebay.com')).toBe(true);
  expect(validURL('htp://ebay.co.u')).toBe(false);
  expect(validURL('hujrsu')).toBe(false);
});
