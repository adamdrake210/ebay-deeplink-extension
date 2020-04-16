import { mwebViewConverter } from '../helpers';

test('Converts link to a mwebView link', () => {
  expect(
    mwebViewConverter('https://pages.ebay.com/financialservices/index.html'),
  ).toBe(
    'ebay://link/?nav=webview&ssoScope=true&url=https%3A%2F%2Fpages.ebay.com%2Ffinancialservices%2Findex.html',
  );
});
