import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const randMin = 0;
const randMax = 100;

const gcd = (x, y) => {
  if (x !== 0) {
    return gcd(y % x, x);
  }
  return y;
};


// get data for game's process
const getData = () => {
  const num1 = getRandomNumber(randMin, randMax);
  const num2 = getRandomNumber(randMin, randMax);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
