#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { lose } from '../src/cli.js';
import { brainGamesStart } from '../src/index.js';
import { user } from '../src/cli.js';

export const brainCalc = () => {
    const znaki = ['+','-','*'];
    const number = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    const randomZnak = Math.floor(Math.random() * 2);
    console.log(`Question: ${number}${znaki[randomZnak]}${numberTwo}`);
    const answer = parseInt(readlineSync.question('Your answer: '));
    let correctAnswer = 0;
    if (randomZnak === 0 ) {
      correctAnswer = number + numberTwo;
    } else if (randomZnak === 1) {
      correctAnswer = number - numberTwo;
    } else if (randomZnak === 2) {
      correctAnswer = number * numberTwo;
    }

    if (answer === correctAnswer) {
        console.log('Correct!');
        return 1;
    }
    lose(answer, correctAnswer, name);
  return 0;
}

const brainGameCalc = brainCalc;
const name = user();
console.log('What is the result of the expression?');
brainGamesStart(brainGameCalc, name);