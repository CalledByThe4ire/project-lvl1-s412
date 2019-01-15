#!/usr/bin/env node
import './brain-games';
import userInput from '..';

console.log('Answer \'yes\' if number even otherwise answer \'no\'.');
const name = userInput('May I have your name? ');
console.log(`Hello, ${name}!`);

const randomNumber = limit => Math.floor(Math.random() * limit) + 1;
const isEven = n => n % 2 === 0;
const correctMsg = 'Correct!';
const incorrectMsg = "'yes' is wrong answer ;(. Correct answer was 'no'.";
const getAnswer = () => {
  const num = randomNumber(100);
  const answer = userInput(`Question: ${num}\nYour answer: `);
  if ((answer === 'yes' && isEven(num)) || (answer === 'no' && !isEven(num))) {
    return correctMsg;
  }
  return incorrectMsg;
};
const playGame = (times) => {
  let n = times;
  if (!n) {
    return `Congratulations!, ${name}`;
  }
  const result = getAnswer();
  if (result !== correctMsg) {
    return result;
  }
  n -= 1;
  return playGame((n));
};

console.log(playGame(3));
