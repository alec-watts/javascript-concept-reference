// 
// Basics
// 
function sum(a, b) {
  return a + b
}

let sum2 = (a, b) => {
  return a + b
}

let sum3 = (a, b) => a + b

console.log(sum3(2, 2))

function isPositive(number) {
  return number >= 0
}

let isPositive2 = number => number >= 0

function randomNumber() {
  return Math.random
}

let randomNumber2 = () => Math.random
// 
// 
// 


// Arrow functions become useful when you want to create anonymous functions
// - passing function to other functions

// document.addEventListener('click', function() {
//     console.log('Click')
// })

// document.addEventListener('click', () =>{
//     console.log('Click')
// })

// // document.addEventListener('click', () => console.log('Click'))


class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
//the unnamed function has the same scope as this call below. 
person.printNameFunction()
// Same as this.name call below
// console.log(this.name)


