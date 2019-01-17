import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// number of times game's process is repeated
const gameProcessCounter = 3;

// print game's process
const printGameProcess = (counter, data) => {
  const n = counter;
  if (n === 0) {
    return true;
  }

  const questionAnswerPair = data();
  const question = car(questionAnswerPair);
  const correctAnswer = cdr(questionAnswerPair);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }
  console.log('Correct!');
  return printGameProcess(n - 1, data);
};

export default (data, gameDescription = '') => {
  const greeting = `Welcome to Brain Games!${
    gameDescription === '' ? '\n\n' : `\n${gameDescription}\n`
  }`;
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return printGameProcess(gameProcessCounter, data)
    ? console.log(`Congratulations, ${name}!`)
    : console.log(`Let's try again, ${name}`);
};
