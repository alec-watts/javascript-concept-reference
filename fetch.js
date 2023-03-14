// // GET
// fetch('https://reqres.in/api/users')
//     .then(res => {
//         if(res.ok) {
//             console.log("success!")
//             res.json().then(data => console.log(data))
//         } else {
//             console.log("error!")
//         }
//     })
    
// POST
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({ name: 'User 1' })
})
.then(res => {
    if(res.ok) {
        console.log("success!")
        res.json().then(data => console.log(data))
    } else {
        console.log("error!")
    }
})
    