const total = require("./math")
const result = total.add(5, 15)
console.log(result)

//Greet function import(require)
const greet = require("./greeting")

const person1 = greet.greetMorning("John")
const person2 = greet.greetEvening("Jane")

console.log(person1) // Output: Good morning, John!
console.log(person2) // Output: Good evening, Jane!