var https = require('https');

var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printHTML (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printHTML);