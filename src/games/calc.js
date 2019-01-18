import { cons } from 'hexlet-pairs';
import getRandomNumber from '../helpers';
import runGame from '../engine';

const gameDescription = 'What is the result of the expression?';
const randomMinNumber = 0;
const randomMaxNumber = 100;
const mathOperations = ['+', '-', '*', '/'];

// calculate question' expression
const calculateExpression = (num1, operator, num2) => {
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    case '/':
      result = (num1 / num2) === 'Infinity' ? 0 : 0;
      break;

    default:
      result = 0;
  }
  return result;
};

// get data for game's process
const getData = () => {
  const mathOperation = mathOperations[getRandomNumber(randomMinNumber, mathOperations.length - 1)];
  const a = getRandomNumber(randomMinNumber, randomMaxNumber);
  const b = getRandomNumber(randomMinNumber, randomMaxNumber);

  const question = `${a} ${mathOperation} ${b}`;
  const answer = calculateExpression(a, mathOperation, b).toString();
  const pair = cons(question, answer);

  return pair;
};

export default () => runGame(getData, gameDescription);
