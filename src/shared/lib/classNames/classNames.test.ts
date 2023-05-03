import { classNames } from '../classNames/classNames';

describe('classNames', () => {
  test('classNames with class', () => {
    expect(classNames('class')).toBe('class');
  });
  test('classNames with additional class', () => {
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(
      'class class1 class2',
    );
  });
  test('classNames with mods', () => {
    const expected = 'class class1 class2 class3 class4';
    expect(
      classNames('class', { class3: true, class4: true }, ['class1', 'class2']),
    ).toBe(expected);
  });
  test('classNames with mods false and undefined', () => {
    const expected = 'class class1 class2';
    expect(
      classNames('class', { class3: false, class4: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
