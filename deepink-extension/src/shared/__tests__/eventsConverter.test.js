import { eventsConverter } from '../helpers/helpers';

test('Converts link to a native browse node link', () => {
  expect(
    eventsConverter('https://www.ebay.it/e/_elettronica/informatica'),
  ).toBe(
    'ebay://link?nav=item.events&eventgroupname=_elettronica&eventname=informatica',
  );
});
