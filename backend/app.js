var express = require('express')
    , app = express()
    , router = express.Router()
    , http = require('http')
    , server = http.createServer(app);

router.get('/', function(req, res, next) {
  console.log('req');
  res.send('200 OK');
});
app.use('/', router);
server.listen('8888');
console.log('listening');