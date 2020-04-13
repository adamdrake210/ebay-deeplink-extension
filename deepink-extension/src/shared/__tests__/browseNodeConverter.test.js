import { browseNodeConverter } from '../helpers/helpers';

test('Converts link to a native browse node link', () => {
  expect(
    browseNodeConverter('https://www.ebay.co.uk/b/Fashion/bn_7000259675'),
  ).toBe('ebay://link?nav=item.browse&id=7000259675');
});
