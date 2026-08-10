const total = require("./math")
const result = total.add(5, 15)
console.log(result)

//Greet function import(require)
// const greet = require("./greeting")
// const person1 = greet.greetMorning("John")
// const person2 = greet.greetEvening("Jane")

//
// const  greet = require("./greeting")

// console.log(greet.greetMorning("John")) // Output: Good morning, John!
// console.log(greet.greetEvening("Jane")) // Output: Good evening, Jane!

//Destructuring import(require)
const { greetMorning, greetEvening } = require("./greeting")
console.log(greetMorning("John")) // Output: Good morning, John!
console.log(greetEvening("Jane")) // Output: Good evening, Jane!