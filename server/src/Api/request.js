const https = require('https')
const btoa = require('btoa')
const api = require('../Api/apiConfig.js')

module.exports.doRequest = function (path) {
  'use strict'
  let pullURL = api.baseURL + path
  console.log('url', pullURL)
  const options = {
    host: 'www.mysportsfeeds.com',
    port: '443',
    path: pullURL,
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa(api.apiKey + ':' + 'MYSPORTSFEEDS')
    }
  }
  options.headers['User-Agent'] = 'node ' + process.version

  https.request(options, (res) => {
    var body = ''

    res.on('data', (chunk) => {
      body += chunk
    })
    res.on('end', () => {
      var response = JSON.parse(body)
      console.log('hi', response)
    })
  }).end()
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
