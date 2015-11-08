require('../vendors/polyfill.js');
import React from '../vendors/react.js';
//import {Main} from './components/Main.js';
//import {Add} from './components/Add.js'
import { Router, Route, Link } from 'react-router'

let Add = React.createClass({
  render() {
    return (
      <h1>123</h1>
    )
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  let r =
   <Router>
    <Route path="/" component={Add}>
      {/*<Route path="add" component={Add}/>*/}
    </Route>
  </Router>;
  React.render(r, document.body);
});