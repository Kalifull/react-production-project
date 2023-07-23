export type Mods = Record<string, boolean | string | undefined>;

export const cn = (
  styles: string,
  mods: Mods = {},
  additions: Array<string | undefined> = []
): string => {
  const filtratedMods = Object.keys(mods).filter((className) => Boolean(mods[className]));
  const filtratedAdditions = additions.filter(Boolean);

  return [styles, ...filtratedMods, ...filtratedAdditions].join(' ');
};
