console.log("Hello World!")
console.log("I'm learning JavaScript!")


console.log(1)
console.log(2)
console.log(3)


// JavaScript use double slash to start a comment line

// uses let key word to declare a variable
let message = "Hello World!"
console.log(message)

// uses key word const to declare a constant
const FILE_SIZE_LIMIT = 2000
const MAX_SPEED = 300

// uses var key word to declare a (global) variable
// but should generally avoid
// var is not block scoped
if (true) {
  var name = "Nathan"
}
console.log(name)


// Basic data types of JavaScript:
// Number, String, Boolean, null, undefined


// + can be used to concatenate strings
message = "Hello " + "and " + "Goodbye!"
console.log(message)

// equivalent to python's f-string
name = "John"
let topic = "JavaScript"
message = `${name} is learning ${topic} today`
console.log(message)


// Numbers in JavaScript can be integers or floating point
let x = 1
let y = 2
console.log(x + y)

let f = 1.2
let z = 2.35
console.log(f + z)

// JavaScript's boolean values are lowercase
let on = true
let off = false

// undefined is a data type that represents a variable that has not been assigned a value
let first_name
console.log(first_name)

// can also assign undefined to a variable directly
// but it's not recommended
let last_name = undefined

// null is a data type that represents an empty or unknown value
first_name = null

// undefined means a variable is not yet initialized
// null means you intentionally assign an empty value to a variable
// TBC: 8 Type Conversion and Coercion
