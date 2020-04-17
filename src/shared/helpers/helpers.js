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
  if (link.endsWith('.html')) {
    return mwebViewLink + urlencode(link);
  } else {
    return mwebViewLink + urlencode(`${link}/index.html`);
  }
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

export function trimEnd(link) {
  if (link.endsWith('/')) {
    return link.slice(0, -1);
  } else {
    return link;
  }
}

export function nativeLinkConverter(url) {
  const trimmedUrl = trimEnd(url);
  let updatedUrl;

  if (
    trimmedUrl.includes('.css') ||
    trimmedUrl.includes('.js') ||
    trimmedUrl.startsWith('#')
  ) {
    return trimmedUrl;
  }

  if (trimmedUrl.endsWith('/deals')) {
    updatedUrl = nativeLinkDeals;
  }

  if (
    trimmedUrl.endsWith('ebay.com') ||
    trimmedUrl.endsWith('ebay.co.uk') ||
    trimmedUrl.endsWith('ebay.it') ||
    trimmedUrl.endsWith('ebay.de') ||
    trimmedUrl.endsWith('ebay.fr') ||
    trimmedUrl.endsWith('ebay.es')
  ) {
    updatedUrl = nativeLinkHomepage;
  }

  if (trimmedUrl.includes('/e/')) {
    updatedUrl = eventsConverter(trimmedUrl);
  }

  if (trimmedUrl.includes('/b/')) {
    updatedUrl = browseNodeConverter(trimmedUrl);
  }

  if (
    trimmedUrl.includes('stores.ebay') ||
    trimmedUrl.includes('/str/') ||
    trimmedUrl.includes('/sch/')
  ) {
    updatedUrl = storeConverter(trimmedUrl);
  }

  if (trimmedUrl.includes('pages.ebay')) {
    updatedUrl = mwebViewConverter(trimmedUrl);
  }

  return updatedUrl || trimmedUrl;
}
