#!/usr/bin/env node

import mdLinks from './md-links';
import { statsLink, statsValidate, extLinks } from './links';
import { verify } from './path-directory';

const [, , ...args] = process.argv;


const first = args[0];
const second = args[1];
const third = args[2];


// eslint-disable-next-line import/prefer-default-export
export const cli = (path, optionOne, optionTwo) => new Promise((resolve) => {
  let out = '';
  if (path !== undefined && optionOne === '--validate' && optionTwo === undefined) {
    mdLinks(path, { validate: true })
      .then((res) => {
        res.forEach((element) => {
          const vals = Object.values(element);
          out += `${vals[2]} ${vals[0]} ${vals[3]} ${vals[4]} ${vals[1].slice(0, 50)}\n`;
        });
        resolve(out);
      });
  } else if (path !== undefined && optionOne === undefined && optionTwo === undefined) {
    mdLinks(path, { validate: false }) // extrae solo los links
      .then((res) => {
        res.forEach((element) => {
          const vals = Object.values(element);
          out += `${vals[2]} ${vals[0]}  ${vals[1].slice(0, 50)}\n`;
        });
        resolve(out);
      })
      .catch(() => resolve('Route not found'));
  } else if (path !== undefined && optionOne === '--stats' && optionTwo === undefined) {
    resolve(statsLink(extLinks(verify(path)))); //
  } else if (path !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
    mdLinks(path, { validate: true })
      .then((res) => {
        const resultStats = statsLink(extLinks(verify(path)));
        resolve(statsValidate(res, resultStats));
      });
  } else if (path !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
    resolve('Invalid command');
  } else {
    resolve('Enter a route and a valid option');
  }
});

cli(first, second, third).then(res => console.log(res));
