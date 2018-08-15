import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    if (this.props.display === 'about') {
      // TODO
    }
    else if (this.props.display === 'portfolio') {
      // TODO
    }
    else if (this.props.display === 'contact') {
      // TODO
    }
    else { // home page
      return (
        <div className="App">
          <h1>{this.props.display}</h1>
        </div>
      )
    }
  }
}

export default App;
