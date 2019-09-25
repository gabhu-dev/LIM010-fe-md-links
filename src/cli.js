#!/usr/bin/env node

// Grab provided args.
const [, , ...args] = process.argv

// print hello world provided args.
console.log(`Hello World ${args}`)