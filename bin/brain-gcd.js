#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { loseBrainGcd } from '../src/cli.js';
import { brainGamesStart } from '../src/index.js';
import { user } from '../src/cli.js';


export const brainGcd = () => {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    console.log('Find the greatest common divisor of given numbers.')
    console.log(`Question: ${a} ${b}`);
    while (a !== 0 && b !== 0) {
        if (a > b) {
          a = a -b;
        }
        else {
          b = b - a;
        }
    }
    const correctAnswer = a + b;
    console.log(correctAnswer);
    const answer = parseInt(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
        console.log('Correct!');
        return 1;
    }
    loseBrainGcd(answer, correctAnswer, name);
  return 0;
}

const brainGcdStart = brainGcd;
const name = user();
brainGamesStart(brainGcdStart, name);