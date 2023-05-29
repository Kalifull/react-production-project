import { cn } from '../src/shared/lib';

describe('classNames', () => {
  test('with only first parameter styles', () => {
    expect(cn('someClass')).toBe('someClass');
  });

  test('with styles and additional class', () => {
    const expected = 'someClass class1 class2';

    expect(cn('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with styles, mods and additional class', () => {
    const expected = 'someClass hovered class1 class2';

    expect(cn('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(
      expected
    );
  });

  test('with mods undefined', () => {
    const expected = 'someClass scrollable class1 class2';

    expect(cn('someClass', { hovered: undefined, scrollable: true }, ['class1', 'class2'])).toBe(
      expected
    );
  });
});
