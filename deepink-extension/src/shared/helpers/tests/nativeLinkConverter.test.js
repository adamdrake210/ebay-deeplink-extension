import { nativeLinkConverter } from '../helpers';

test('Converts link to a native events page link', () => {
  expect(
    nativeLinkConverter('https://www.ebay.it/e/_elettronica/informatica'),
  ).toBe(
    'ebay://link?nav=item.events&eventgroupname=_elettronica&eventname=informatica',
  );
  expect(nativeLinkConverter('https://www.ebay.co.uk/str/blacksoutdoors')).toBe(
    'ebay://link/?nav=item.query&seller=blacksoutdoors',
  );
  expect(nativeLinkConverter('http://stores.ebay.co.uk/deluxbathrooms')).toBe(
    'ebay://link/?nav=item.query&seller=deluxbathrooms',
  );
  expect(
    nativeLinkConverter('https://www.ebay.com/b/Trading-Cards/bn_7116496578'),
  ).toBe('ebay://link?nav=item.browse&id=7116496578');
  expect(
    nativeLinkConverter('https://pages.ebay.com/financialservices/index.html'),
  ).toBe(
    'ebay://link/?nav=webview&ssoScope=true&url=https%3A%2F%2Fpages.ebay.com%2Ffinancialservices%2Findex.html',
  );
});
