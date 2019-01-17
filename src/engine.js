import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// number of times game's process is repeated
const gameProcessCounter = 3;
// Get the player's answer
const getPlayerAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// print game's process
const printGameProcess = (counter, data, userName) => {
  let n = counter;
  if (!n) {
    return console.log(`Congratulations, ${userName}!`);
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
    return console.log(`Let's try again, ${userName}`);
  }
  n -= 1;
  console.log('Correct!');
  return printGameProcess(n, data, userName);
};

export default (data, rules = '') => {
  // по поводу rules: я не понимаю, в чем вы видите проблему.
  // правила СПЕЦИФИЧНЫ ДЛЯ КАЖДОЙ ОТДЕЛЬНОЙ ИГРЫ, это не общая часть engine,
  // и мне кажется абсолютно естественным передавать их в модуле соответствующей игры.
  // Если вы считаете отдельную функцию для этого изботычным шагом,предлагаю вариант ниже:
  const greeting = `Welcome to Brain Games!${rules === '' ? '\n\n' : `\n${rules}\n`}`;
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  printGameProcess(gameProcessCounter, data, name);
};
