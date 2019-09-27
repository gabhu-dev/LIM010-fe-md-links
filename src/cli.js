#!/usr/bin/env node

// Grab provided args.
import mdLinks from './md-links';
import { statsLink, statsValidate } from './links';

const [, , ...args] = process.argv;

// print hello world provided args.
// console.log(`Hello World ${args}`);
// console.log(`indice 0 ${args[0]}`);
// console.log(`indice 1 ${args[1]}`);

const first = args[0];
const second = args[1];
// const third = args[2];
// const capture = mdLinks(first, second);
// console.log(first, second);


const cli = (route, stats, validate) => {
  if (route !== undefined && validate === '--validate') {
    return mdLinks(route, { validate: true });
  }
  if (route !== undefined && validate === undefined) {
    return mdLinks(route, { validate: false });
  }
  if (route !== undefined && stats === '--stats') {
    return statsLink(mdLinks(route, { validate: false }));
  }
  // verificar esto despues
  if (route !== undefined && stats === '--stats' && validate === '--validate') {
    return statsValidate(statsLink(mdLinks(route, { validate: false })), mdLinks(route, { validate: true }));
  }
  return console.log('Route not found');
};

// console.log(cli(first, second, third));
// mdLinks('readme.md', { validate: true })
//   .then(res => console.log(res));
mdLinks(first, second)
  .then(res => console.log(res));
console.log(first, second);
