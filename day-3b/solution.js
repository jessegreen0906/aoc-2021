const fs = require('fs')
const path = require('path')

// Load data
const fileContents = fs.readFileSync(path.join(__dirname,'input.txt'),"utf-8") // Synchronous call, just coz. Async call would be more performant with a larger data set.
const parsedData = fileContents.split("\r\n");

// Initialise
let o2List = parsedData.map(value => {return value.split("")})
let bitIndex = 0
let co2ScrubList = parsedData.map(value => {return value.split("")})

// Filter out diagnostic values from o2List
while (o2List.length !== 1) {
	let counter = 0
	o2List.forEach(value => {
		value[bitIndex] === "1" ? counter++ : counter--
	})
	o2List = o2List.filter((value => {
		let flag
		if(counter >= 0) {
			value[bitIndex] === "1" ? flag = true : flag = false
		} else {
			value[bitIndex] === "0" ? flag = true : flag = false
		}
		return flag
	}))
	bitIndex++
}

// Filter out diagnostic values from co2ScrubList
bitIndex = 0
while (co2ScrubList.length !== 1) {
	let counter = 0
	co2ScrubList.forEach(value => {
		value[bitIndex] === "1" ? counter++ : counter--
	})
	co2ScrubList = co2ScrubList.filter((value => {
		let flag
		if(counter < 0) {
			value[bitIndex] === "1" ? flag = true : flag = false
		} else {
			value[bitIndex] === "0" ? flag = true : flag = false
		}
		return flag
	}))
	bitIndex++
}

console.log(o2List[0].join(""))
console.log(co2ScrubList[0])

// Convert to string and then to decimal
let o2rate = parseInt(o2List[0].join(""), 2)
let co2rate = parseInt(co2ScrubList[0].join(""), 2)

console.log(o2rate*co2rate)