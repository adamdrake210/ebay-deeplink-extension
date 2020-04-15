/* eslint-disable complexity */
const urlencode = require('urlencode');

const nativeLinkHomepage = 'ebay://link/?nav=home';
const nativeLinkDeals = 'ebay://link/?nav=item.deals';
const nativeLinkStore = 'ebay://link/?nav=item.query&seller=';
const mwebViewLink = 'ebay://link/?nav=webview&ssoScope=true&url=';

export function browseNodeConverter(link) {
  const categoryEbayID = link.split('/bn_');
  return `ebay://link?nav=item.browse&id=${categoryEbayID[1]}`;
}

export function eventsConverter(link) {
  let splitHyperlink = link.split('/e/');
  splitHyperlink = splitHyperlink[1].split('/');

  return `ebay://link?nav=item.events&eventgroupname=${splitHyperlink[0]}&eventname=${splitHyperlink[1]}`;
}

export function storeConverter(link) {
  const splitHyperlink = link.split('/');

  if (link.includes('stores')) {
    return nativeLinkStore + splitHyperlink[3];
  } else if (link.includes('str') || link.includes('sch')) {
    return nativeLinkStore + splitHyperlink[4];
  } else {
    return link;
  }
}

export function mwebViewConverter(link) {
  return mwebViewLink + urlencode(link);
}

export function validURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  return !!pattern.test(str);
}

export function nativeLinkConverter(url) {
  let updatedUrl;

  if (url.includes('.css') || url.includes('.js') || url.startsWith('#')) {
    return url;
  }

  if (url.endsWith('/deals')) {
    updatedUrl = nativeLinkDeals;
  }

  if (
    url.endsWith('/') &&
    (url.endsWith('ebay.com/') ||
      url.endsWith('ebay.co.uk/') ||
      url.endsWith('ebay.it/') ||
      url.endsWith('ebay.de/') ||
      url.endsWith('ebay.fr/') ||
      url.endsWith('ebay.es/'))
  ) {
    updatedUrl = nativeLinkHomepage;
  }

  if (url.includes('/e/')) {
    updatedUrl = eventsConverter(url);
  }

  if (url.includes('/b/')) {
    updatedUrl = browseNodeConverter(url);
  }

  if (
    url.includes('stores.ebay') ||
    url.includes('/str/') ||
    url.includes('/sch/')
  ) {
    updatedUrl = storeConverter(url);
  }

  if (url.includes('pages.ebay')) {
    updatedUrl = mwebViewConverter(url);
  }

  return updatedUrl || url;
}
