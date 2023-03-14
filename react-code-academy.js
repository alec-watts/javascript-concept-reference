
// STATE SET FUNCTION
// You are passing setCount a funcion. A cb functon. 
// This polymorphic call to setCount will call the cb function at the proper time
// avoiding stale state values
function increment() {
    setCount(function(prevCount) {
        prevCount + 1
    })
}

// setState(updater, callback)
// pass a function: setCount(prevCount => prevCount + 1) instead of a value: setCount(prevCount + 1)
// When our CB function is called, it takes the prevCount as an argument, ensuring the value is not stale
const increment = () => setCount(prevCount => prevCount + 1)