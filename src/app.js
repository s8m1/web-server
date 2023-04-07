const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send("Hello Express !!")
})

app.get('/weather', (req, res) => {
    res.send("<h1>This is the weather page</h1>")
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})