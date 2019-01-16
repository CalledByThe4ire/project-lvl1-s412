import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// number of times game's process is repeated
const gameProcessCounter = 3;

// print game's header
const printGameHeader = () => console.log('Welcome to Brain Games!');

// print game's rules
const printGameRules = (rules) => {
  console.log(rules);
  console.log();
};

// print success message for game' completion
const printGameCompletionSuccessMsg = (name) => {
  console.log(`Congratulations, ${name}!`);
};

// print failure message for game' completion
const printGameCompletionFailureMsg = (name) => {
  console.log(`Let's try again, ${name}`);
};

// Get player's name
const askPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();

  return name;
};

// Get the player's answer
const getPlayerAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// print game's process
const printGameProcess = (counter, data, userName) => {
  let n = counter;
  if (!n) {
    return printGameCompletionSuccessMsg(userName);
  }

  const qa = data();
  const question = car(qa);
  const correctAnswer = cdr(qa);
  console.log(`Question: ${question}`);
  const answer = getPlayerAnswer();
  if (answer !== correctAnswer) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return printGameCompletionFailureMsg(userName);
  }
  n -= 1;
  console.log('Correct!');
  return printGameProcess(n, data, userName);
};

export default (data, rules) => {
  printGameHeader();
  printGameRules(rules);
  printGameProcess(gameProcessCounter, data, askPlayerName());
};
