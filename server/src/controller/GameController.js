// const request = require('request')
const api = require('../Api/apiConfig.js')
// const authentication = require('../Api/AuthenticateApi')

// module.exports = {
//   getStandings (req, res) {
//     authentication.authenticate()
//     let path = req.query.path
//     let url = api.baseURL + path
//     console.log(url)
//     request(url, function (error, response, body) {
//       if (response === null || response === undefined) {
//         return new Error('LibratoMetrics.Error: Request failed without a response. Network Connected?')
//       }
//       if (!error && response.statusCode === 200) {
//         var json = JSON.parse(body)
//         res.send(json)
//       } else {
//         let error = 'There was an error: ' + response.statusCode
//         console.log(body)
//         res.status(400).send(error)
//       }
//     })
//   }
// }

// Modified sample code from mysportsfeeds.com for nodejs
module.exports = {
  getStandings (req, res, callback) {
    'use strict'
    let path = req.query.path
    let url = api.baseURL + path
    const httpTransport = require('https')
    const btoa = require('btoa')
    const responseEncoding = 'utf8'
    const httpOptions = {
      hostname: 'www.mysportsfeeds.com',
      port: '443',
      path: url,
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa(api.apiKey + ':' + 'MYSPORTSFEEDS')
      }
    }
    httpOptions.headers['User-Agent'] = 'node ' + process.version

    const request = httpTransport.request(httpOptions, (resp) => {
      let responseBufs = []
      let responseStr = ''

      resp.on('data', (chunk) => {
        if (Buffer.isBuffer(chunk)) {
          responseBufs.push(chunk)
        } else {
          responseStr = responseStr + chunk
        }
      }).on('end', () => {
        console.log(responseStr)
        res.send({standings: responseStr})
        responseStr = responseBufs.length > 0
          ? Buffer.concat(responseBufs).toString(responseEncoding) : responseStr

        callback(null, resp.statusCode, resp.headers, responseStr)
      })
    })
      .setTimeout(0)
      .on('error', (error) => {
        callback(error)
      })
    request.write('')
    request.end()
  }
}
