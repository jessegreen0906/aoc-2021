const fs = require('fs')
const path = require('path')

// Load data
const fileContents = fs.readFileSync(path.join(__dirname,'input.txt'),"utf-8") // Synchronous call, just coz. Async call would be more performant with a larger data set.
const parsedData = fileContents.split("\r\n").map(value => {return parseInt(value)});
const summedDepths = parsedData.map((val, i, arr) => {return arr.length > i+2 ? parsedData[i]+parsedData[i+1]+parsedData[i+2] : null})
summedDepths.pop()
summedDepths.pop()

// Initialise
let counter = 0
let prevNum = summedDepths.shift()
let currNum

// Iterate through inputs
while (summedDepths.length > 0) {
    // Compare and count
    currNum = summedDepths.shift()
    prevNum < currNum ? counter++ : null
    prevNum = currNum
}

// Return
console.log(counter)