export const getRandomElementsFromList = (count: number, array: any[]) =>
  [...array]
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(count, array.length));

export const roundOneDecimal = (n: number) => Math.round(n * 10) / 10;

// returns a new object with the values at each key mapped using mapFn(value)
export const objectMap = (object: object, mapFn: (arg0: any) => any) =>
  Object.keys(object).reduce(function (result: any, key) {
    result[key as keyof typeof result] = mapFn(
      object[key as keyof typeof object]
    );
    return result;
  }, {});
