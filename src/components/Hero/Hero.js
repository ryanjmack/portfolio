import React from 'react';
import './Hero.css';

class Hero extends React.Component {

  render() {
    return (
      <main className="Hero">
        <h1>Hi, I'm <a target='blank' href='https://www.linkedin.com/in/ryan-mack-b6a971159'>Ryan</a>!</h1>
        <h2>I'm a student currently studying <a  target='blank' href='https://github.com/ryanjmack'>Computer Science</a></h2>
      </main>
    );
  }
}

export default Hero;
