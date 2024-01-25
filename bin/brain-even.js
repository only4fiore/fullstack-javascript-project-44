#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { lose } from '../src/cli.js';
import { brainGamesStart } from '../src/index.js';
import { user } from '../src/cli.js';

export const brainEven = (name) => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  } 
  lose(answer, correctAnswer, name);
  return 0;
}

const brainGame = brainEven;
const name = user();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
brainGamesStart(brainGame, name);