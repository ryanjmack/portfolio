import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar.js';
import Hero from '../Hero/Hero.js';
import About from '../About/About.js';
import Portfolio from '../Portfolio/Portfolio.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'home'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // handles a button click from the child component Navbar
  handleClick(e) {
    e.preventDefault();

    // each button in the Navbar component has a custom data attribute
    // 'data-value' -- the state maintained by the App class will
    // dictate what components are rendered.
    this.setState({
      display: e.target.dataset.value
    });
  }


  render() {
    const activeButton = this.state.display;

    // we have 4 main pages to display in our render method
    if (activeButton === 'about') {
      return (
        <div className="App">
          <Navbar handleClick={this.handleClick} activeButton={activeButton} />
          <About />
        </div>
      );
    }

    else if (activeButton === 'portfolio') {
      return (
        <div className="App">
          <Navbar handleClick={this.handleClick} activeButton={activeButton} />
          <Portfolio />
        </div>
      );
    }

    else if (activeButton === 'contact') {
      return (
        <div className="App">
          <Navbar handleClick={this.handleClick} activeButton={activeButton} />
          <h1>{activeButton}</h1>
        </div>
      );
    }

    else { // home page
      return (
        <div className="App">
          <Navbar handleClick={this.handleClick} activeButton={activeButton} />
          <Hero />
        </div>
      );
    }
  }
}

export default App;
