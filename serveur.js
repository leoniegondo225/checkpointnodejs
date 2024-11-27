const http = require ("http")


const serveur = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello Node !!!!</h1>\n')
})

serveur.listen(3000, () => console.log("serveur demarer au port 3000"))
//tapé dans la console serveur.js