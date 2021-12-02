const fs = require('fs')
const path = require('path')

// Load data
const fileContents = fs.readFileSync(path.join(__dirname,'input.txt'),"utf-8") // Synchronous call, just coz. Async call would be more performant with a larger data set.
const parsedData = fileContents.split("\r\n").map(value => {return parseInt(value)});

/* Previously I'd added each sequence of numbers together and then done iterative comparisons between them.
    But I was a fool! If I compare the difference between n1+n2+n3 and n2+n3+n4 I'm actually just comparing n1 and n4.
    So let's just take a comparison of value n(x) and n(x+3)
 */
const differences = parsedData.map((val, i, arr) => {return arr.length > i+3 ? arr[i] - arr[i+3] : 0})

// Initialise
let counter = 0

// Count how many calculated differences are negative (i.e. the second number is larger than the first)
differences.forEach((n) => {n<0?counter++:null})

// Return
console.log(counter)