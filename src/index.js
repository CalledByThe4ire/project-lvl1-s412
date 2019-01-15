import readlineSync from 'readline-sync';

export default (answer = 'May I have your name? ') => {
    const actual = readlineSync.question(answer);
    return `Hello, ${actual}!`
};
