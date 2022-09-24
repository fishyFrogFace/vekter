export const getRandomElementsFromList = (count: number, array: any[]) =>
  [...array]
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(count, array.length));

export const roundOneDecimal = (n: number) => Math.round(n * 10) / 10;
