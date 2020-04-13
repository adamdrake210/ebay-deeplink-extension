/* eslint-disable complexity */
const nativeLinkHomepage = 'ebay://link/?nav=home';
const nativeLinkDeals = 'ebay://link/?nav=item.deals';
const nativeLinkStore = 'ebay://link/?nav=item.query&seller=';

export function browseNodeConverter(link) {
  const categoryEbayID = link.split('/bn_');
  return `ebay://link?nav=item.browse&id=${categoryEbayID[1]}`;
}

function eventsConverter(link) {
  let splitHyperlink = link.split('/e/');
  splitHyperlink = splitHyperlink[1].split('/');

  return `ebay://link?nav=item.events&eventgroupname=${splitHyperlink[0]}&eventname=${splitHyperlink[1]}`;
}

function storeConverter(link) {
  const splitHyperlink = link.split('/');

  if (splitHyperlink.length >= 3) {
    return nativeLinkStore + splitHyperlink[3];
  } else {
    return link;
  }
}

export function nativeLink(websiteHyperlink) {
  let hyperlink;

  if (websiteHyperlink.includes('.css') || websiteHyperlink.includes('.js')) {
    return websiteHyperlink;
  }

  if (websiteHyperlink.startsWith('#')) {
    return websiteHyperlink;
  }

  if (websiteHyperlink) {
    if (websiteHyperlink.endsWith('/deals')) {
      hyperlink = nativeLinkDeals;
    }

    if (
      websiteHyperlink.endsWith('/') &&
      (websiteHyperlink.endsWith('ebay.com/') ||
        websiteHyperlink.endsWith('ebay.co.uk/') ||
        websiteHyperlink.endsWith('ebay.it/') ||
        websiteHyperlink.endsWith('ebay.de/') ||
        websiteHyperlink.endsWith('ebay.fr/') ||
        websiteHyperlink.endsWith('ebay.es/'))
    ) {
      hyperlink = nativeLinkHomepage;
    }

    if (websiteHyperlink.includes('/e/')) {
      hyperlink = eventsConverter(websiteHyperlink);
    }

    if (websiteHyperlink.includes('/b/')) {
      hyperlink = browseNodeConverter(websiteHyperlink);
    }

    if (websiteHyperlink.includes('stores.ebay')) {
      hyperlink = storeConverter(websiteHyperlink);
    }
  }

  return hyperlink || websiteHyperlink;
}
