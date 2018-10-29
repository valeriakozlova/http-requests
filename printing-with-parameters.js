var https = require('https');

function getAndPrintHTML (requestParameters) {

  var requestOptions = requestParameters;

  var buffer = "";

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;

    });

    response.on('end', function() {
      console.log('Response stream complete:' + buffer);
    });

  });
}

var userOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(userOptions);

