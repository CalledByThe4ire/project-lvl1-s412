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

export default (data, rules = '') => {
  // по поводу rules: я не понимаю, в чем вы видите проблему.
  // правила СПЕЦИФИЧНЫ ДЛЯ КАЖДОЙ ОТДЕЛЬНОЙ ИГРЫ, это не общая часть engine,
  // и мне кажется абсолютно естественным передавать их в модуле соответствующей игры.
  // Если вы считаете отдельную функцию для этого изботычным шагом,предлагаю вариант ниже:
  const greeting = `Welcome to Brain Games!${
    rules === '' ? '\n\n' : `\n${rules}\n`
  }`;
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  return printGameProcess(gameProcessCounter, data, name)
    ? console.log(`Congratulations, ${name}!`)
    : console.log(`Let's try again, ${name}`);
};
