import { VENUES } from './venuesService';

describe('VENUES', () => {

  test('it should parse the JSON successfully', () => {
    expect(VENUES.length).toBeGreaterThan(0);
  })
})