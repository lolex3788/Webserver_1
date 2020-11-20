const express = require('express')
const app = express()
const port = 1337

app.use(express.json())
app.use(express.urlencoded())

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => {
    res.sendFile(clientDir + 'index.html')
})
app.get('/success', (req, res) => {
    res.sendFile(clientDir + 'success.html')
})
app.get('/style', (req, res) => {
  res.sendFile(clientDir + 'main_style.css')
})
app.get('/greaat', (req, res) => {
    res.sendFile(clientDir + 'success.css')
})
app.get('/annoyed', (req, res) => {
  res.sendFile(clientDir + 'niklas.png')
})

app.post('/sendMessage', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.email)

    dbc.saveData(req.body.name,req.body.email)
    res.redirect('/success')
})

app.listen(port, () => console.log(`Example app listening on port port!`))



const dbc = require("./databaseModule");



