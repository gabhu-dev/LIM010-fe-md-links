#!/usr/bin/env node

// Grab provided args.
import mdLinks from './md-links';
import { statsLink, statsValidate, extLinks } from './links';
import { verify } from './path-directory';

const [, , ...args] = process.argv;

// print hello world provided args.
// console.log(`Hello World ${args}`);
// console.log(`indice 0 ${args[0]}`);
// console.log(`indice 1 ${args[1]}`);

const first = args[0];
const second = args[1];
const third = args[2];
// const capture = mdLinks(first, second);
// console.log(first, second);


const cli = (route, validate, stats) => {
  if (route !== undefined && validate === '--validate' && stats === undefined) {
    mdLinks(route, { validate: true }).then(res => console.log(res));
  }
  if (route !== undefined && validate === undefined && stats === undefined) {
    mdLinks(route, { validate: false }).then(res => console.log(res));
  }
  if (route !== undefined && validate === '--stats' && stats === undefined) {
    console.log(statsLink(extLinks(verify(route))));
  }
  // verificar esto despues
  if (route !== undefined && validate === '--stats' && stats === '--validate') {
    const resultValidate = mdLinks(route, { validate: true })
      .then((res) => {
        const resultStats = statsLink(extLinks(verify(route)));
        const result = statsValidate(res, resultStats);
        console.log(result);
      });
  }
  if (route === undefined && validate === undefined && stats === undefined) {
    console.log('Enter a path');
  }
  if(route !== undefined && validate !== '--validate' && stats !== '--stats') {
    console.log('Enter a validate command ');
  }
};

cli(first, second, third);
// mdLinks('readme.md', { validate: true })
//   .then(res => console.log(res));
// mdLinks(first, second)
//   .then(res => console.log(res));
// console.log(first, second);
