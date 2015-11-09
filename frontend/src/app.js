require('babel-polyfill');
import {Router} from './router.js';
import Backbone from 'backbone';

class App {
  constructor() {
    new Router();
    Backbone.history.start();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  new App();
});