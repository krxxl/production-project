export type Mods = Record<string, boolean | string | undefined>;
// const obj: Mods = {
//   'smthg': true,
//   'sdfg': 'dzfs'
// }
export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
