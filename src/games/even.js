import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const randomMinNumber = 0;
const randomMaxNumber = 100;

// get data for game's process
const getData = () => {
  const question = getRandomNumber(randomMinNumber, randomMaxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
