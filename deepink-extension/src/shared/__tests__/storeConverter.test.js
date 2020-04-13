import { storeConverter } from '../helpers/helpers';

test('Converts link to a native browse node link', () => {
  expect(storeConverter('https://www.ebay.co.uk/str/blacksoutdoors')).toBe(
    'ebay://link/?nav=item.query&seller=blacksoutdoors',
  );
  expect(storeConverter('http://stores.ebay.co.uk/deluxbathrooms')).toBe(
    'ebay://link/?nav=item.query&seller=deluxbathrooms',
  );
  expect(storeConverter('http://stores.ebay.co.uk/footasylumoutlet')).toBe(
    'ebay://link/?nav=item.query&seller=footasylumoutlet',
  );
});
