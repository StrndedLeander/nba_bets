// const https = require('https')
// const btoa = require('btoa')
const api = require('../Api/apiConfig.js')

var MySportsFeeds = require('mysportsfeeds-node')

var msf = new MySportsFeeds('2.0', true)

module.exports.doRequest = function (path) {
  'use strict'
  // let pullURL = api.baseURL + path
  // console.log('url', pullURL)
  // const options = {
  //   host: 'www.mysportsfeeds.com',
  //   port: '443',
  //   path: pullURL,
  //   method: 'GET',
  //   headers: {
  //     'Authorization': 'Basic ' + btoa(api.apiKey + ':' + 'MYSPORTSFEEDS')
  //   }
  // }
  // options.headers['User-Agent'] = 'node ' + process.version

  // https.request(options, (res) => {
  //   var body = ''

  //   res.on('data', (data) => {
  //     body += data
  //   })
  //   res.on('end', () => {
  //     console.log(body)
  //   })
  //   res.on('error', function (e) {
  //     console.log('Got error: ' + e.message)
  //   })
  // }).end()
  msf.authenticate(api.apiKey, 'MYSPORTSFEEDS')
  var data = msf.getData('nba', '2016-2017-regular', 'seasonal_player_gamelogs', 'json', {
    player: 'stephen-curry'
  })
  console.log(data)
}
//   const request = https.request(httpOptions, (resp) => {
//     let responseBufs = []
//     let responseStr = ''
//     resp.on('data', (chunk) => {
//       if (Buffer.isBuffer(chunk)) {
//         responseBufs.push(chunk)
//       } else {
//         responseStr = responseStr + chunk
//       }
//     }).on('end', () => {
//       console.log('.')
//       responseStr = responseBufs.length > 0
//         ? Buffer.concat(responseBufs).toString(responseEncoding) : responseStr
//       console.log(responseStr)
//       return responseStr
//     })
//   })
//     .setTimeout(0)
//     .on('error', (error) => {
//       return error
//     })
//   console.log(request)
//   request.write('')
//   request.end()
// }
