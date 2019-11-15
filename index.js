const translate = require('./gizoogle')
const querystring = require('querystring')

exports.handler = function(event, context, callback) {
  const params = querystring.parse(event.body);
  const text = params.text || "hi";
  translate(text).then(translation => {
    callback(null, {
      statusCode: 200,
      body:  translation
    })
  })
}