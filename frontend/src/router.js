import React from 'react';
import Backbone from 'backbone';
import MainController from './controllers/Main.js'
import HomeComponent from './components/Home.js';
import AddComponent from './components/Add.js';

export class Router extends Backbone.Router {
  constructor(options) {
    super(options);

    //роутер
    this.routes = {
      '': 'main',
      'add': 'add'
    };
    this._bindRoutes();

    //контроллер
    this.controller = new MainController();
  }

  main() {
    React.render(<HomeComponent controller={this.controller}/>, document.body);
  }

  add() {
    React.render(<AddComponent controller={this.controller}/>, document.body);
  }
}