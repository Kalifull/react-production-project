export type Mods = Record<string, boolean | string | undefined>;

/**
 * Generates a class name based on the provided styles, mods, and additions.
 *
 * @param {string} styles The base styles for the class name.
 * @param {Mods} mods An object containing modifiers for the class name.
 * @param {Array<string | undefined>} additions Additional class name parts to be included.
 * @return {string} The generated class name.
 */

export const cn = (
  styles: string,
  mods: Mods = {},
  additions: Array<string | undefined> = []
): string => {
  const filtratedMods = Object.keys(mods).filter((className) => Boolean(mods[className]));
  const filtratedAdditions = Array.from(
    new Set(
      additions.flatMap((value) => {
        if (typeof value === 'string') {
          return value;
        }

        return [];
      })
    )
  ).filter(Boolean);

  return [styles, ...filtratedMods, ...filtratedAdditions].join(' ');
};
