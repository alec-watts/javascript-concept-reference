// Function as an object

const originalFunc = (num) => { return num + 2};

// Re-assign function to new variable
const newFunc = originalFunc

// Accesss the fucntion's name
console.log('Func name: ' + newFunc.name)

// Return the functions body as a string
console.log('Func body: ' + newFunc.toString())

// Add a property to the function
newFunc.isMathFunction = true
console.log('Is func a math function: ' + newFunc.isMathFunction)

// Pass function as an argument
const functionNameLength = (func) => { return func.name.length }
console.log('Func body length: ' + functionNameLength(newFunc))

// Return the function
const returnFunc = () => { return newFunc }
console.log('Returning func (body): ' + returnFunc.toString())



// .reduce()
const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, valueToAdd) => {
    console.log('Adding: ' + valueToAdd)
    return accumulator + valueToAdd
});
console.log('Sum: ' + sum)


// .forEach()
// Note: no return in function or of the function
arrayOfNumbers.forEach((number, index) => {
    console.log(index + ': ' + number)
})


// .filter()
// Note: returned values
const randomNumbers = [4, 11, 42, 14, 39]
const filteredArray = randomNumbers.filter((n) => {
    return n > 5
})
console.log('Start forEach')
filteredArray.forEach((number, index) => {
    console.log(index + ': ' + number)
})
console.log('End forEach')

// .map()
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

const announcements = finalParticipants.map((name) => {
    return name + ' joined this file.'
})
announcements.forEach((anounce) => {
    console.log(anounce)
})