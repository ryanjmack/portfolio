import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar.js';

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
          <Navbar />
          <h1>{this.props.display}</h1>
        </div>
      )
    }
  }
}

export default App;
