var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var data = fs.readFileSync("index.html");
    var output = data.toString();
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
