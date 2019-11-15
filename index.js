const translate = require('./gizoogle')
const querystring = require('querystring')

exports.handler = function(event, context, callback) {
  const params = querystring.parse(event.body);
  const text = params.text || event.queryStringParameters.text || "hi";
  translate(event.queryStringParameters.text).then(translation => {
    callback(null, {
      statusCode: 200,
      body:  translation
    })
  })
}