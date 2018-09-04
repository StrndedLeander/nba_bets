const api = require('./apiConfig')
const MySportsFeeds = require('mysportsfeeds-node')

module.exports.authenticate = function () {
  var msf = new MySportsFeeds('2.0', true)
  msf.authenticate(api.apiKey, 'MYSPORTSFEEDS')
  console.log('API authenticated successfully')
}
