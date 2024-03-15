#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { lose, user } from '../src/cli.js';
import brainGamesStart from '../src/index.js';

export default function brainCalc(name) {
  const znaki = ['+', '-', '*'];
  const number = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const randomZnak = Math.floor(Math.random() * 2);
  console.log(`Question: ${number} ${znaki[randomZnak]} ${numberTwo}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  let correctAnswer = 0;
  if (randomZnak === 0) {
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

const gameName = brainCalc;
const name = user();
console.log('What is the result of the expression?');
brainGamesStart(gameName, name);
