import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const rules = 'What number is missing in the progression?';
const randMin = 0;
const randMax = 100;

const buildArithmeticProgression = (start, length, constant) => {
  const iter = (s, l, c, acc) => {
    if (l === 0) {
      return acc;
    }
    const newAcc = [...acc, s];
    return iter(s + c, l - 1, c, newAcc);
  };
  return iter(start, length, constant, []);
};

const startNumber = getRandomNumber(randMin, randMax);
const len = 10;
const constantNumber = 2;

const arithmeticProgression = buildArithmeticProgression(
  startNumber,
  len,
  constantNumber,
);

// get data for game's process
const getData = () => {
  const idx = getRandomNumber(0, arithmeticProgression.length - 1);
  const question = [
    ...arithmeticProgression.slice(0, idx),
    '..',
    ...arithmeticProgression.slice(idx + 1),
  ];
  const answer = arithmeticProgression[idx].toString();
  const pair = cons(question.join(' '), answer);
  return pair;
};

export default () => runGame(getData, rules);
