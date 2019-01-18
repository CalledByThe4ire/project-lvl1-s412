import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const randMin = -100;
const randMax = 100;
const gameDescription = 'What number is missing in the progression?';

const buildArithmeticProgression = (start, len, constStep) => {
  const iter = (s, l, c, acc) => {
    if (l === 0) {
      return acc;
    }
    const newAcc = [...acc, s];
    return iter(s + c, l - 1, c, newAcc);
  };
  return iter(start, len, constStep, []);
};

// get data for game's process
const getData = () => {
  const startNumber = getRandomNumber(randMin, randMax);
  const length = 10;
  const constantStep = getRandomNumber(-5, 5);
  const arithmeticProgression = buildArithmeticProgression(
    startNumber,
    length,
    constantStep,
  );
  const hiddenElIndex = getRandomNumber(0, arithmeticProgression.length - 1);
  const question = [
    ...arithmeticProgression.slice(0, hiddenElIndex),
    '..',
    ...arithmeticProgression.slice(hiddenElIndex + 1),
  ];
  const answer = arithmeticProgression[hiddenElIndex].toString();
  const pair = cons(question.join(' '), answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
