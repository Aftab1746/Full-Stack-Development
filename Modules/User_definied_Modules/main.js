const temp = require('./temperture')

const result1 = temp.celsiusToFahrenheit(37)
const result2 = temp.fahrenheitToCelsius(97)
const freezing = temp.isFreezing(-5)
const boiling = temp.isBoiling(10)

console.log(result1) // Output: 212
console.log(result2) // Output: 100
console.log(`Is it freezing? ${freezing}`) // Output: true
console.log(`Is it boiling? ${boiling}`) // Output: true