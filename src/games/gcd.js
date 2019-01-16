import { cons } from 'hexlet-pairs';
import { getRandomNumber, gcd } from '../helpers';
import runGame from '../engine';

const rules = 'Find the greatest common divisor of given numbers.';
const rand = 100;

// get data for game's process
const getData = () => {
  const num1 = getRandomNumber(rand);
  const num2 = getRandomNumber(rand);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, rules);
