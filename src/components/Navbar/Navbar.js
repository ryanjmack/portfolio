import React from 'react';
import './Navbar.css';
import '../../stylesheets/styles.css';


class Navbar extends React.Component {

  // helper function that creates 4 buttons for the navbar
  createButtons(activeButton) {
    // React warning: Each child in an array or iterator should have a unique "key" prop.
    // https://stackoverflow.com/a/43892905/6894170
    return ['home', 'about', 'portfolio', 'contact']
      .filter(button => button !== activeButton)
      .map((buttonName, i) => <button onClick={this.props.handleClick} data-value={buttonName} key={i}>{buttonName}</button>);
  }

  render() {
    return (
      <nav className="Navbar">
        {this.createButtons(this.props.activeButton)}
      </nav>
    );
  }
}

export default Navbar;
