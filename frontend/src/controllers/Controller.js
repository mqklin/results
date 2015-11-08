export default class {
  getArticles() {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', '/articles');
      req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(Error("Network Error"));
      };
      req.send();
    });
  }
}