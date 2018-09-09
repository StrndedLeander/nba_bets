module.exports.request = function (config, callback) {
  'use strict'
  const httpTransport = require('https')
  const btoa = require('btoa')
  const responseEncoding = 'utf8'
  const httpOptions = {
    hostname: 'www.mysportsfeeds.com',
    port: '443',
    path: config.path,
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa(config.apiKey + ':' + 'MYSPORTSFEEDS')
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
