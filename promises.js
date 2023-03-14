// Youtube: https://www.youtube.com/watch?v=DHvZLI7Db8E


// Similar to callbacks. Add some clean pass/fail functionality.
// Useful if you want to do something after a long aync wait/fetch
// Promise is completed - resolved or failed - rejected
// Promise is passed one parameter - a cb function
// This cb function has two parameters - resolve & reject
let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        // Can pass anything into resolve or reject
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// Anything inside the then will run after a resolve
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((err) => {
    console.log('This is in catch ' + err)
})


// Replacing callback with Promise

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'what the ef'
        })
    } else {
        callback('thumbs up')
    }
}

// watchTutorialCallback(message => {
//     console.log(message)
// }, error => {
//     console.log(error.name + ' ' + error.message)
// })


let p2 = new Promise((resolve, reject) => {
    if(userLeft) {
        reject({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        reject({
            name: 'User Watching Cat Meme',
            message: 'what the ef'
        })
    } else {
        resolve('Thumbs up')
    }
})

// p2.then(result => {
//     console.log(result + 'yolo') 
// }).catch(err => {
//     console.log(err.name + ' ' + err.message)
// })



// Promise.all
const first = new Promise((resolve, reject) => {
    resolve('First done.')
})

const second = new Promise((resolve, reject) => {
    resolve('Second done.')
})

const third = new Promise((resolve, reject) => {
    resolve('Third done.')
})

// returns array of all resolves
Promise.all([first, second, third]).then(allMessages => {
    console.log(allMessages)
}).catch(idk => {
    console.log(idk)
})

// // calls then on the first resolve
// Promise.race([first, second, third]).then(fastestMessage => {
//     console.log(fastestMessage)
// })