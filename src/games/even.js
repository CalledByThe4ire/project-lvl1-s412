import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const randMin = 0;
const randMax = 100;

// get data for game's process
const getData = () => {
  const question = getRandomNumber(randMin, randMax);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
