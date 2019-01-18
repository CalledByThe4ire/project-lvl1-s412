import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomMinNumber = -100;
const randomMaxNumber = 100;

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }

  if (num < 2 || num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// get data for game's process
const getData = () => {
  const question = getRandomNumber(randomMinNumber, randomMaxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
