const request = require('request')

weather = (address, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=ffce01d0fa478727f13d54cb57f2f83e&query=' + address + '&units=f'

    request(url, (error, response, body) => {
        response = JSON.parse(body)
        callback(response,error)
    })
}

module.exports = {
    weather: weather
}