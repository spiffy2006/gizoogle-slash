const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = (text) => {
  const form = new FormData();
  form.append('translatetext', text);
  return fetch('http://www.gizoogle.net/textilizer.php', {
    method: 'POST',
    body:    form,
    headers: form.getHeaders(),
  }).then((html) => {
    return html.text()
  }).then(text => {
    const $ = cheerio.load(text)
    return $('[name="translatetext"]').val()
  })
}