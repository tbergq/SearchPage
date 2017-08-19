/* eslint no-use-before-define: 0 */
var express = require('express');

var app = express();
var path = require('path');
var http = require('http');

var server = http.createServer(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
  // __dirname : It will resolve to your project folder.
});

var port = process.env.PORT || 9090;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

/* eslint-enable no-use-before-define */
