#!/usr/bin/env node

// Grab provided args.
import mdLinks from './md-links';
import { statsLink, statsValidate, extLinks } from './links';
import { verify, existRoute } from './path-directory';

const [, , ...args] = process.argv;


const first = args[0];
const second = args[1];
const third = args[2];


const cli = (route, optionOne, optionTwo) => {
  if (route !== undefined && optionOne === '--validate' && optionTwo !== '--stats') {
    mdLinks(route, { validate: true }).then(res => console.log(res)); // se ejecuta opcion validate
  } else if (route !== undefined && optionOne !== '--validate' && optionOne !== '--stats') {
    console.log(mdLinks(route, { validate: false })); // extrae solo los links
  } else if (route !== undefined && optionOne === '--stats' && optionTwo === undefined) {
    console.log(statsLink(extLinks(verify(route)))); // hace la funcion de stats -> total / uniques
  } else if (route !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
    mdLinks(route, { validate: true })
      .then((res) => {
        const resultStats = statsLink(extLinks(verify(route)));
        const result = statsValidate(res, resultStats);
        console.log(result);
      });
  } else if (route !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
    console.log('Command invalidate');
  } else if (existRoute(route) === false) {
    console.log('Route not found'); // falta cuando no existe la ruta
  } else { // si todas son undefined
    console.log('Enter a route and option validate');
  }
};
cli(first, second, third);
