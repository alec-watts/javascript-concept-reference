// let data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// const info = data.json()
// console.log(info)
// const axios =

async function fuck()  {
    console.log("hhi")
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
        console.log(response.data)
    })
    // let data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
}
fuck()