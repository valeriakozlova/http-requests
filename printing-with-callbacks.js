var https = require('https');

function getHTML (options, callback) {

  var requestOptions = options;

  var buffer = "";

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;

    });

    response.on('end', function() {callback(buffer);
    });

  });
}



function printHTML (html) {
  console.log(html);
}

var userOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(userOptions, printHTML);
