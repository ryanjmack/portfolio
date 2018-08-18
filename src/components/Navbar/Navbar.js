import React from 'react';
import './Navbar.css';


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
        <div className="Navbar__left">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.48 45.48"><title>R</title><path d="M305.74,416.95a20.21,20.21,0,1,1,20.21-20.21,20.21,20.21,0,0,1-20.21,20.21m0-42.95a22.74,22.74,0,1,0,22.74,22.74A22.74,22.74,0,0,0,305.74,374" transform="translate(-283 -374)"/><path d="M302.49,395.09h4a3.34,3.34,0,0,0,3.64-3.49c0-2.23-1.49-3.44-3.64-3.44h-4Zm-5.88-9.29a2.77,2.77,0,0,1,3-3.05h6.89c6,0,9.75,2.7,9.75,8.85,0,4.31-3.25,6.78-7.25,7.4l6.66,7.13a2.54,2.54,0,0,1,.78,1.72,3,3,0,0,1-5.21,2l-8.69-10.54h-.08v8.5a2.94,2.94,0,1,1-5.88,0Z" transform="translate(-283 -374)"/></svg>
        </div>
        <div className="Navbar__right">
          {this.createButtons(this.props.activeButton)}
        </div>
      </nav>
    );
  }
}

export default Navbar;
