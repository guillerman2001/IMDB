import fs from 'fs'

let json = JSON.stringify(imdb1)
console.log(json)


fs.writeFileSync('imdbBBDD.json', json)

let imdb2 : Imdb = JSON.parse(fs.readFileSync('imdbBBDD.json').toString())
console.log(imdb2)