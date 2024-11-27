const fs = require('fs')

fs.readFile("./welcome.txt", (error, data) => {
    if(error) console.log(error)
        else console.log(data.toString())
})

// tapé dans la console read-file.js