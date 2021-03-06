import { eventsConverter } from '../helpers';

test('Converts link to a native events page link', () => {
  expect(
    eventsConverter('https://www.ebay.it/e/_elettronica/informatica'),
  ).toBe(
    'ebay://link?nav=item.events&eventgroupname=_elettronica&eventname=informatica',
  );
  expect(
    eventsConverter('https://www.ebay.it/e/_moda/abbigliamento-donna'),
  ).toBe(
    'ebay://link?nav=item.events&eventgroupname=_moda&eventname=abbigliamento-donna',
  );
});
