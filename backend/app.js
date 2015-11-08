var express = require('express')
    , app = express()
    , router = express.Router()
    , http = require('http')
    , server = http.createServer(app);

router.get('/', function(req, res, next) {
  console.log('req /');
  res.send('200 OK');
});

var articles_example = [
  {
    "author": "Максим Куклин",
    "url": "http://theagileadmin.com/what-is-devops/",
    "description": "Что такое DevOps и чем оно отличается от Agile",
    "categories": [
      "разработка ПО",
      "управление проектами"
    ],
    "tags": [
      "agile"
    ],
    "rating": "8"
  },
  {
    "author": "Вася Пупкин",
    "url": "https://bocoup.com/weblog/dive-into-flexbox",
    "description": "Полный гайд по flexbox",
    "categories": [
      "программирование",
      "веб-программирование",
      "вёрстка"
    ],
    "tags": [
      "flexbox",
      "CSS3"
    ],
    "rating": "10"
  },
  {
    "author": "Оля Лукина",
    "url": "https://www.quora.com/What-are-some-of-the-best-responses-to-Sell-me-this-paper-cup-or-Sell-me-this-pen-pencil-in-a-job-interview",
    "description": "Как продать ручку",
    "categories": [
      "продажи"
    ],
    "tags": [
      "sales"
    ],
    "rating": "9"
  }
];

router.get('/articles', function(req, res, next) {
  console.log('req /articles');
  res.send(articles_example);
});

app.use('/', router);
server.listen(8080,'127.0.0.1',function(){
 server.close(function(){
   server.listen(8888,'192.168.1.64')
 })
});
console.log('listening');