// // DATA TYPES & VARIABLES
// /*
// String
// Basically just text


// Number



// Boolean



// Undefined 



// Null








// */

// // STRING
// console.log('Hello World')
// console.log("double quotes work too")
// console.log(`back ticks work also`)
// console.log('abcdefghijklmnopqrstuvwxyz' + '12345689101213141516171819202122232425256')
// console.log('hello '  + 'Ryan')

// // specific character
// name = 'Ryan'
// console.log(name[1])
// console.log('Ryan'[0])
// p = 'hello world'
// console.log(p[10])
// console.log('12345'.length)

// let str = "Ryan"
// // console.log(str[0])
// // console.log(str.length)
// // console.log(str[str.length - 1])

// // // NUMBER
// // console.log(typeof 5)
// // console.log(2)
// // console.log(10 + 0.5)
// // console.log(10 - 6)
// // console.log(10 * 10)
// // console.log(10 / 2)
// // console.log(10 % 3)

// // // BOOLEAN
// // console.log(5 < 10)
// // console.log(5 > 10)

// // NaN
// // not a number
// // means there is an error

// // VARIABLES - STORES DATA


// // used anywhere
// // LET
// let userName = 'Ryan'
// console.log(userName) 
// let fullName = 'Ryan Allen Woods'
// console.log(fullName)
// let isRaining = true;
// console.log(isRaining)
// let temperature = 75
// console.log(temperature)
// temperature = temperature + 2
// console.log(temperature)

// // CONST
// // const temperature2 = 90
// // console.log(temperature2)
// // temperature2 = temperature2 + 2
// // console.log(temperature2)


// // C TO F
// let celsius = 10
// let fahrenheit = celsius * 1.8 + 32
// console.log(fahrenheit)


// // EQUALITY
// let bool = '1' == 1
// console.log(bool)
// let bool1 = '1' === 1
// console.log(bool1)


// // NOT EQUAL TO
// let bool2 = '1' == 1
// console.log(bool2)


// CONDITIONALS
// IF ELSE

// let subscribe = false
// let userLoggedIn = true
// if (userLoggedIn === true && subscribe === true) {
//     console.log('show the video')
// } else  if (userLoggedIn === true && subscribe === false){
//     console.log('Show the video and tell them the subscribe')
// } else if (userLoggedIn === false && subscribe === true) {
//     console.log('tell them to log in if they are subscribed')
// }else {
//     console.log('tell them to log in and subscribe')
// }

// let cash = 70
// let price = 60


// if (cash > price) {
//     console.log('paid extra, here is your change')
//     console.log('Change: ' + '$' + (cash - price) )
// } else if (cash === price) {
//     console.log('you paid the exact price' )
// } else {
//     console.log('You do not have enough money, you still owe: ' + '$' + (price - cash))
// }

// MORE CONDITONALS
// COMPARISON
// == - DOUBLE EQUALS
// === - EQUALS VALUES AND TYPES
// != - NOT EQUAL
// !== - NOT EQUAL VALUE OR TYPE
// >= - GREATER THAN EQUAL
// <= LESS THAN EQUAL

//  && - AND

// true && true - true
// true && false - false
// false && false - false
// false && false - false


//  || OR OPERATOR
// true || true
// true || false
// false || true
// false || false

// FALSY VALUES
// undefined
// null
// NaN
// 0
// "
// FALSE

// TRUTHY VALUES
// 10
// 3.14

// "font end simplified"
// "false"
// "0"

// []
// {}


// let cash = 50
// let price = 40
// let isStoreOpen = true

// if ("") {
//     console.log('truthy value')
// } else {
//     console.log('falsy value')
// }

// !!) - tells you in console if truthy or falsy

// TERNARY OPTERATORS
// EX : isObese ? 'unhealthy' : 'healthy'

// let hot = false
// hot ? console.log('weather is hot') : console.log('weather is cold')

// USE TERNARY OPERATOR IF IT ONE LINE OF CODE, IF NOT USE AN IF ELSE STATEMENT

// let subscriber = true
// let loggedIn = true

// let str = subscriber && loggedIn ? 'show the video' : 'hide the video'
// console.log(str)

let cash = 50
let price = 40
let isStoreOpen = false

let str = cash >= price && isStoreOpen ? 'give reciept' : 'do not give reciept'
console.log(str)