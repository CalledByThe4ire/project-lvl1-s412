
import { cons } from 'hexlet-pairs';
import { getRandomNumber, isEven } from '../helpers';
import runGame from '../engine';

const rules = 'Answer "yes" if number even otherwise answer "no".';

// get data for game's process
const getData = () => {
  const question = getRandomNumber(100);
  const answer = isEven(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, rules);
