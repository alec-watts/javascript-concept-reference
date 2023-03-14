// Youtube: https://www.youtube.com/watch?v=V_Kr9OSfDeU

// Used to make promises easier to work with


function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve('Extra Information + ' + response)
    })
}

// makeRequest("Google").then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(info => {
//     console.log(info)
// }).catch(err => {
//     console.log(err)
// })

// async const jawns = (location) => {
async function jawn(location) {
    try {
        // Need the 'await' or it will return the promise, 
        // not the result of the promise being executed
        let response = await makeRequest(location)
        console.log('Response Received')
        let output = await processRequest(response)
        console.log(output)
    } catch (err) {
        console.log(err)
    }
    // Catch will return the first error
}
jawn('Goole')