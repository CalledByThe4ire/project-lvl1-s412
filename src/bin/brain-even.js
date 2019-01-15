#!/usr/bin/env node
import playGame from '../play-game';
import userOutput from '../user-output';

console.log('Answer \'yes\' if number even otherwise answer \'no\'.');
const name = userOutput('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log(playGame(3, name));
