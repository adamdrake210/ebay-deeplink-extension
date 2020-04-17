import { nativeLinkConverter } from '../helpers';

describe('testing nativeLinkConverter function', () => {
  test('Converts homepage and deals to native page links', () => {
    expect(nativeLinkConverter('http://ebay.com')).toBe(
      'ebay://link/?nav=home',
    );
    expect(nativeLinkConverter('http://ebay.com/')).toBe(
      'ebay://link/?nav=home',
    );
    expect(nativeLinkConverter('http://ebay.co.uk/deals/')).toBe(
      'ebay://link/?nav=item.deals',
    );
    expect(nativeLinkConverter('http://ebay.co.uk/deals')).toBe(
      'ebay://link/?nav=item.deals',
    );
  });

  test('Converts event links to native page links', () => {
    expect(
      nativeLinkConverter('https://www.ebay.it/e/_elettronica/informatica'),
    ).toBe(
      'ebay://link?nav=item.events&eventgroupname=_elettronica&eventname=informatica',
    );
  });

  test('Converts browse node links to native page links', () => {
    expect(
      nativeLinkConverter('https://www.ebay.com/b/Trading-Cards/bn_7116496578'),
    ).toBe('ebay://link?nav=item.browse&id=7116496578');
    expect(
      nativeLinkConverter(
        'https://www.ebay.com/b/Mens-Collectible-Sneakers/bn_7000259435',
      ),
    ).toBe('ebay://link?nav=item.browse&id=7000259435');
  });

  test('Converts pages links to mweb view links', () => {
    expect(
      nativeLinkConverter(
        'https://pages.ebay.com/financialservices/index.html',
      ),
    ).toBe(
      'ebay://link/?nav=webview&ssoScope=true&url=https%3A%2F%2Fpages.ebay.com%2Ffinancialservices%2Findex.html',
    );
    expect(
      nativeLinkConverter(
        'https://pages.ebay.co.uk/supporting-small-businesses/',
      ),
    ).toBe(
      'ebay://link/?nav=webview&ssoScope=true&url=https%3A%2F%2Fpages.ebay.co.uk%2Fsupporting-small-businesses%2Findex.html',
    );
    // expect(nativeLinkConverter('https://charity.ebay.co.uk/')).toBe(
    //   'ebay://link/?nav=webview&ssoScope=true&url=https%3A%2F%2Fcharity.ebay.co.uk',
    // );
  });

  test('Converts store links to native page links', () => {
    expect(
      nativeLinkConverter('https://www.ebay.co.uk/str/blacksoutdoors'),
    ).toBe('ebay://link/?nav=item.query&seller=blacksoutdoors');
    expect(nativeLinkConverter('http://stores.ebay.co.uk/deluxbathrooms')).toBe(
      'ebay://link/?nav=item.query&seller=deluxbathrooms',
    );
    expect(
      nativeLinkConverter('http://stores.ebay.co.uk/footasylumoutlet'),
    ).toBe('ebay://link/?nav=item.query&seller=footasylumoutlet');
    expect(
      nativeLinkConverter('https://www.ebay.co.uk/sch/directplants/m.html'),
    ).toBe('ebay://link/?nav=item.query&seller=directplants');
  });
});
