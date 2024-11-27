const fs = require("fs")

//pour créé un fichier 
fs.writeFile("./welcome.txt", "Hello Node", (error) => {
    if(error) console.log(error)
        else console.log("Fichier créé avec succés.")
})

//tapé dans la console create-file.js