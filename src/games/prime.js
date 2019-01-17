import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randMin = 0;
const randMax = 100;

const isPrime = (num) => {
  const sqrtNum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtNum + 1; i += 1) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

// get data for game's process
const getData = () => {
  const question = getRandomNumber(randMin, randMax);
  const answer = isPrime(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => runGame(getData, gameDescription);
