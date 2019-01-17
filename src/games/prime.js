import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randMin = 0;
const randMax = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// get data for game's process
const getData = () => {
  const question = getRandomNumber(randMin, randMax);
  const answer = isPrime(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
