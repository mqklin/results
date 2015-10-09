import React from 'react';

class App extends React.Component {
  render() {
    return (
      <button className="btn btn-alert">Буцтрап кнопка</button>
    );
  }
}

React.render(<App/>, document.getElementById('body'));