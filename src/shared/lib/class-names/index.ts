type Mods = Record<string, boolean | string>;

const classNames = (styles: string, mods: Mods = {}, additions: string[] = []): string => {
  const filtratedMods = Object.keys(mods).filter((className) => Boolean(mods[className]));
  const filtratedAdditions = additions.filter(Boolean);

  return [styles, ...filtratedMods, ...filtratedAdditions].join(' ');
};

export default classNames;
