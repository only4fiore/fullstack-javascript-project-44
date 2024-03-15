#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { lose, user } from '../src/cli.js';
import brainGamesStart from '../src/index.js';

export const brainProgression = () => {
  const n = Math.floor(Math.random() * 6) + 5;
  const a = Math.floor(Math.random() * 11);
  const b = Math.floor(Math.random() * 11);
  const progression = [a];
  for (let i = 1; i < n; i += 1) {
    progression.push(a + b * i);
  }
  return progression;
};

export const brainProgressionPlay = (name) => {
  const progression = brainProgression();
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = hiddenValue;
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  lose(answer, correctAnswer, name);
  return 0;
};

const gameName = brainProgressionPlay;
const name = user();
console.log('What number is missing in the progression?');
brainGamesStart(gameName, name);
