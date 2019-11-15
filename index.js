const translate = require('./gizoogle')

exports.handler = function(event, context, callback) {
  translate(event.queryStringParameters.text).then(translation => {
    callback(null, {
      statusCode: 200,
      body:  translation
    })
  })
}