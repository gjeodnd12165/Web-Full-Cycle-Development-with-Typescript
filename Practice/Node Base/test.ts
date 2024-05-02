import * as readline from 'readline/promises';

let pages: number = 0;

const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
