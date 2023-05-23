type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, additions: string[]): string => {
  const filtratedMods = Object.keys(mods).filter((className) => Boolean(mods[className]));

  return [cls, ...filtratedMods, ...additions].join(' ');
};
