#!/usr/bin/env node
// Grab provided args.
"use strict";

const [,, ...args] = process.argv; // print hello world provided args.

console.log(`Hello World ${args}`);