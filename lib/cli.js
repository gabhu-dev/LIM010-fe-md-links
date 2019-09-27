#!/usr/bin/env node
// Grab provided args.
// import {mdLinks} from './md-Links.js';
"use strict";

const [,, ...args] = process.argv; // print hello world provided args.
// console.log(`Hello World ${args}`);
// console.log(`indice 0 ${args[0]}`);
// console.log(`indice 1 ${args[1]}`);

const first = args[0];
const second = args[1]; // const capture = mdLinks(first, second);

console.log(first, second); // if()