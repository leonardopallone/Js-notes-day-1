// comment 
/*
muli
lint 
comment
*/

// this 
// is a 
// shortcut

// Datatype
// String
// "" ''
// boolean
//  true 
//  false
// integer
//  12 
// -123
// 0
// floats
// 1.23
// 0.123213
// undefined 
// null 
// NAN
// Array
// [ 1,2,3,4,5]
// Hashes
// { firstName: 'abe'}
// + - * / () %
// ** - to the power of
// Math.PI

// > 
// < 
// >=
// <=
// ==
// ===
// !=
// !==
  
// && and 
// || or 

// Vanilla JS 
// var age = 6 

// function newWord() {
//   // var age = 6 
// }
// scope - where we have access to the variable

// they will be scoped to where ever we put them
// let - change 
// const - constant, can't change

// let age = 6
// age = 7 

// const age2 = 6
// // age2 = 8

// console.log(age)
// console.log(age2)

// functions methods , group up common code to small parts.

// V JS 
// function countColor(colors) {
//   return colors.length
// }

// function countColor() {
// }

// ES6

// const countColor = () => {
  
// }

// const countColor = (colors, colors1) => {
  
// }


// countColor()

// annon
// () => { 

// }

const cl = (text) => {
  console.log(text)
}

// default params
// const countColor = (colors = []) => {
//   return colors.length
// }

// cl(countColor(['red', 'green', 'blue']))
// cl(countColor())

// const showInfo (name, options = {}) {
//   let likes = options.likes
//   let followers = options.followers
//   let following = options.following
// }

// const showInfo = (name, { likes, followers, following } = {}) => {
//   cl(likes)
//   cl(followers)
//   cl(following)
// }

// showInfo("bob", { likes: 4, followers: 10, following: 6 })

// rest params 
// ... in a function params

// const logColors = (firstColor, ...colors) => {
//   cl(firstColor)
//   for ( let i in colors) {
//     cl(colors[i])
//   }
// }

// logColors('red', 'green')
// logColors('blue', 'purple', 'yellow')

// spread op 
// grab and spread the element from the collection
// const colors = ['blue', 'purple', 'yellow']
// cl(...colors)

// arrays
// zero based index
// let arr = ['bob', 'jill', 'lucy']
// arr[1]
// arr.push('jack')
// arr.unshift('bill')
// arr.pop()
// arr.shift()

// cl(arr)

// for ( let i = 0; i < arr.length; i++) {
//   cl(arr[i])
// }

// iterates
// arr.forEach( (name) => {
//   cl(name)
// })

// for (let name of arr) {
//   cl(name)
// }

// returns an array
// arr.map( name => {
//   cl(name)
// })

// return an arr
// let numbers = [1,2,3,4,5,6,7,7]
// let odd = numbers.filter( num => num % 2)
// cl(odd)

// Hashes / objects
let bobPerson = { firstName: 'bob', age: 3, email: 'gog@gmail.com' }

// cl(bobPerson['age'])
// cl(bobPerson.age)
// cl(bobPerson.email)
// cl(bobPerson.firstName)

// bobPerson.lastName = 'smith'
// cl(bobPerson)

// Object destructuring
const { age, email, firstName } = bobPerson
// const age = bobPerson.age
// const email = bobPerson.email
// const firstName = bobPerson.firstName
// cl(age)
// cl(email)

// string concatenation 
// cl( " The age is: " + age)

// interpolation
// cl(`the age is: ${age}`)

// if (name == 'bob') {
  
// } else if (name == 'jack') {
  
// } else {
  
// }

// switch(name)
//   case name == 'bob':
  
//   default:


// const as module components
// const Home = ({ name, age}) => {
//   return (
  
//   )
// }

// export default Home
//   import Home from '../home/pages/Home';
// export Home
//     import { Home } from '../home/pages/Home';




// const About = ({ name, age}) => (
  
// )

// JSON 
// javascript object notation

// {
//   "firstName": "John",
//   "lastName": "Doe"
// } 