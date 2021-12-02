const fs = require('fs')
const path = require('path')

// Load data
const fileContents = fs.readFileSync(path.join(__dirname,'input.txt'),"utf-8") // Synchronous call, just coz. Async call would be more performant with a larger data set.
const parsedData = fileContents.split("\r\n");

// Initialise
let position = 0
let depth = 0
let aim = 0

// Iterate through directions
parsedData.forEach((value => {
    // Split into instruction and quantity
    let instruction = value.split(" ")
    let quantity = parseInt(instruction[1])

    // Update coordinate based on instruction.
    switch (instruction[0]) {
        case "forward":
            position += quantity
            let depthChange = quantity*aim
            if (depthChange < 0 && depthChange*-1 > depth) {
                depth = 0
            } else {
                depth += depthChange
            }
            break
        case "down":
            aim += quantity
            break
        case "up":
            aim -= quantity
            break
        default:
            console.error('Unknown instruction: '+instruction[0])
    }
    return
}))

console.log('Position = '+position)
console.log('Depth = '+depth)
console.log('Multiplied = '+(depth*position))
