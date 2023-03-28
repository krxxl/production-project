import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('addQueryParams with one param', () => {
    const params = getQueryParams({
      test: 'qwe',
    });
    expect(params).toBe('?test=qwe');
  });
  test('addQueryParams with many params', () => {
    const params = getQueryParams({
      test: 'qwe',
      test2: 'qwer',
    });
    expect(params).toBe('?test=qwe&test2=qwer');
  });
  test('addQueryParams without params', () => {
    const params = getQueryParams({
      test: undefined,
    });
    expect(params).toBe('?');
  });
});
