import { browseNodeConverter } from '../helpers/helpers';

test('Converts link to a native browse node link', () => {
  expect(
    browseNodeConverter('https://www.ebay.co.uk/b/Fashion/bn_7000259675'),
  ).toBe('ebay://link?nav=item.browse&id=7000259675');
  expect(
    browseNodeConverter('https://www.ebay.com/b/Trading-Cards/bn_7116496578'),
  ).toBe('ebay://link?nav=item.browse&id=7116496578');
});
