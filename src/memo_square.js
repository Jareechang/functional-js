import memoize from './simple_memoize'
import log from './logger'

let squareNumber = memoize(x => x * x);

console.log(JSON.stringify(squareNumber))

log(squareNumber(4))
log(squareNumber(5))
log(squareNumber(2))
