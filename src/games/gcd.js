import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const randomMinNumber = 0;
const randomMaxNumber = 100;

const gcd = (x, y) => {
  if (x !== 0) {
    return gcd(y % x, x);
  }
  return y;
};

// get data for game's process
const getData = () => {
  const num1 = getRandomNumber(randomMinNumber, randomMaxNumber);
  const num2 = getRandomNumber(randomMinNumber, randomMaxNumber);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
