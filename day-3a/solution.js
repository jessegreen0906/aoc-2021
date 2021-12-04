const fs = require('fs')
const path = require('path')

// Load data
const fileContents = fs.readFileSync(path.join(__dirname,'input.txt'),"utf-8") // Synchronous call, just coz. Async call would be more performant with a larger data set.
const parsedData = fileContents.split("\r\n");

// Initialise
let counters = []
let gammaRateBin = ''
let epsilonRateBin = ''

// Work out the most common binary value in each position.
parsedData.forEach((value) => {
	value.split("").forEach((value, index) => {
		counters.length < index+1 ? counters.push(0) : null;
		parseInt(value) === 1 ? counters[index]++ : counters[index]--
	})
})

// Create the gamma and epsilon rates
counters.forEach(value => {
	if(value >= 0) {
		gammaRateBin += "1"
		epsilonRateBin += "0"
	} else {
		gammaRateBin += "0"
		epsilonRateBin += "1"
	}
})

// Convert to decimal
let gammaRate = parseInt(gammaRateBin,2)
let epsilonRate = parseInt(epsilonRateBin,2)

console.log(gammaRate*epsilonRate)