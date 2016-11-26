const add = (x, y) => { return x + y }
const multiply = (x, y) => { return x * y }

let flockA = 4
let flockB = 2
let flockC = 0

let result = add(
    multiply(flockB, add(flockA, flockC)),
    multiply(flockA, flockB)
)

let shortenResult = multiply(flockB, add(flockA, flockA))

console.log(result)
console.log(shortenResult)
