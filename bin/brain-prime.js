#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { lose } from '../src/cli.js';
import { brainGamesStart } from '../src/index.js';
import { user } from '../src/cli.js';


function isPrime(num) {
    if (num <= 1) {
      return 'no';
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
  
  function brainPrime() {
    const number = Math.floor(Math.random() * 101);
    const correctAnswer = isPrime(number);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      return 1;
    }
    lose(answer, correctAnswer, name);
    return 0;
  }

const gameName = brainPrime;
const name = user();
brainGamesStart(gameName, name);