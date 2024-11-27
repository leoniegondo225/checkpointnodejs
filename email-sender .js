
const { error, info } = require("console")
const http = require("http")
const nodemailer = require("nodemailer")



  //transporter smtp pour notre email
  const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  secure: false,
    auth: {
        user: "nodejs503@gmail.com",
        pass: "vnke xmhv mvrp whxr"
    }
})

//option de l'email
const option = {
    from: "monnou.gondo@uvci.edu.ci",//from c'est celui qui envoie l'email 
    to: "nodejs503@gmail.com",// to c'est celui qui reçoie l'email
    subject: "essaie d'envoie avec node",
    text: "Bonjour les amis, comment allez vous?"
}

//envoie de l'email
const req = async() => {
    const info = await smtp.sendMail(option)
    console.log(info)
}

req().catch(error => console.log(error))