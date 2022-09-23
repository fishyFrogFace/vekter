export const getRandomElementsFromList = (max: number, array: any[]) =>
  [...array].sort(() => 0.5 - Math.random()).slice(0, max);

export const roundOneDecimal = (n: number) => Math.round(n * 10) / 10;
