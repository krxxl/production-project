type Mods = Record<string, boolean | string>
// const obj: Mods = {
//   'smthg': true,
//   'sdfg': 'dzfs'
// }
export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string => [cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
