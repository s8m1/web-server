const express = require('express')
const util = require('./util')
const app = express()

app.get('', (req, res) => {
    res.send("Hello Express !!")
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            error: "Please enter the address !"
        })
        return
    }
    util.weather(req.query.address, (response, error) => {
        res.send({
            location: response.request.query,
            region: response.location.region,
            currentTemperature: response.current.temperature,
            feelslike:response.current.feelslike,
            unit: response.request.unit
        })
    })

})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})