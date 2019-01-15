import userOutput from './user-output';

const randomNumber = limit => Math.floor(Math.random() * limit) + 1;
const isEven = n => n % 2 === 0;
const successMsg = 'Correct!';
const failureMsg = "'yes' is wrong answer ;(. Correct answer was 'no'.";
const getAnswer = () => {
  const num = randomNumber(100);
  const answer = userOutput(`Question: ${num}\nYour answer: `);
  if ((answer === 'yes' && isEven(num)) || (answer === 'no' && !isEven(num))) {
    return successMsg;
  }
  return failureMsg;
};
const playGame = (times, playerName) => {
  let n = times;
  if (!n) {
    return `Congratulations, ${playerName}!`;
  }
  const result = getAnswer();
  if (result !== successMsg) {
    return result;
  }
  n -= 1;
  return playGame((n, playerName));
};

export default playGame;
