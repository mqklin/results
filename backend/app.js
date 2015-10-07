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
server.listen(8000,'127.0.0.1',function(){
 server.close(function(){
   server.listen(8888,'192.168.1.2')
 })
})
console.log('listening');