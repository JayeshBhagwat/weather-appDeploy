const request = require('request')

const forecast = (location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=328e8b940dd39f592e234a1508880384&query='+location;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.location)
            // callback(undefined,body)
        }
    })
}

module.exports = forecast