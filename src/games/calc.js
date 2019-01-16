import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../helpers';
import runGame from '../engine';

const rules = 'What is the result of the expression?';
const rand = 5;
const ops = ['+', '-', '*'];

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

    default:
      result = 0;
  }
  return result;
};

// get data for game's process
const getData = () => {
  const op = ops[getRandomNumber(ops.length) - 1];
  const a = getRandomNumber(rand);
  const b = getRandomNumber(rand);

  const question = `${a} ${op} ${b}`;
  const answer = calculateExpression(a, op, b).toString();
  const pair = cons(question, answer);

  return pair;
};

export default () => runGame(getData, rules);
