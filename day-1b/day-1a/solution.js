const fs = require('fs')
const path = require('path')

// Load data
const fileContents = fs.readFileSync(path.join(__dirname,'input.txt'),"utf-8") // Synchronous call, just coz. Async call would be more performant with a larger data set.
const parsedData = fileContents.split("\r\n").map(value => {return parseInt(value)});

// Initialise
let counter = 0
let prevDepth = parsedData.shift()
let currDepth

// Iterate through inputs
while (parsedData.length > 0) {
    // Compare and count
    currDepth = parsedData.shift()
    prevDepth < currDepth ? counter++ : null
    prevDepth = currDepth
}

// Return
console.log(counter)