// primitive datatype-- call by value
// 7 -- type datatype : string, bigint, number, boolean, null, undefined, symbol

// javascript: it is a dynamically typed language, which means that data types of variable are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = false
// console.log( score )
// console.log(typeof score) // type of -> boolean

const scoreRight= 100
// console.log( scoreRight)
// console.log( typeof scoreRight) // type of -> number

const valueScore = 100.45
// console.log(valueScore)
// console.log(typeof valueScore) // type of -> number 

let tempOutSide = null 
// console.log(tempOutSide)
// console.log(typeof tempOutSide) // type of null -> object

let isLoggedIn
// console.log( isLoggedIn) 
// console.log(typeof isLoggedIn) // type of isloggedIn ->undefined
const id = Symbol('deep123')
// console.log(id);
const AnotherId = Symbol('deep123')
 console.log(AnotherId);
// compare both symbol ------ output is (false)
// console.log( id === AnotherId)
// Reference Type( Non-primitive datatype )
// 3 -- type datatype : array, functions, Objects    
