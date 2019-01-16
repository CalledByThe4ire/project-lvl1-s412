import { cons } from 'hexlet-pairs';
import { getRandomNumber, gcd } from '../helpers';
import runGame from '../engine';

const rules = 'Find the greatest common divisor of given numbers.';
const rand = 100;

// get data for game's process
const getData = () => {
  const leftOperand = getRandomNumber(rand);
  const rightOperand = getRandomNumber(rand);
  const question = `${leftOperand} ${rightOperand}`;
  const answer = gcd(leftOperand, rightOperand).toString();
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, rules);
