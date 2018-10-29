var https = require('https');

module.exports = function (options, callback) {

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


};