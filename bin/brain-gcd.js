#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { lose, user } from '../src/cli.js';
import brainGamesStart from '../src/index.js';

export default function brainGcd() {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${a} ${b}`);
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const correctAnswer = a + b;
  console.log(correctAnswer);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  lose(answer, correctAnswer);
  return 0;
}

const gameName = brainGcd;
const name = user();
brainGamesStart(gameName, name);
