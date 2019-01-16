export const isEven = number => number % 2 === 0;

// export const getRandomNumber = limit => Math.floor(Math.random() * limit) + 1;
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (x, y) => {
  if (x !== 0) {
    return gcd(y % x, x);
  }
  return y;
};
