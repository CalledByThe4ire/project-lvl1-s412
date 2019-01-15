import readlineSync from 'readline-sync';

export default (input) => {
  const output = readlineSync.question(input);
  return `${output}`;
};
