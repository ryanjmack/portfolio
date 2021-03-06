import React from 'react';
import './Portfolio.css';


class Portfolio extends React.Component {

  generateCards() {

    const portfolio = [
      {name: 'Global Temperature Visualization', tags: ['D3.js'], description: 'A visualization of the annual global land temperature variance from 1880-2018', src: 'https://github.com/ryanjmack/Global-Surface-Temperature', demo: 'https://ryanjmack.github.io/Global-Surface-Temperature/'},
      {name: 'React Markdown Previewer', tags: ['React.js'], description: 'A live markdown previewer', src: 'https://github.com/ryanjmack/Markdown-Previewer', demo: 'https://ryanjmack.github.io/Markdown-Previewer'},
      {name: 'Unbeatable Tic Tac Toe', tags: ['JavaScript'],  description: 'There are two outcomes: a draw or a loss; minimax is that good', src: 'https://github.com/ryanjmack/tic-tac-toe', demo: 'https://ryanjmack.github.io/tic-tac-toe'},
      {name: 'URL Shortener Microservice', tags: ['Node.js', 'MongoDB'], description: 'A URL Shortener service which stores shortened URLs in a database', src: 'https://github.com/ryanjmack/URL-shortener-microservice', demo: 'https://ryanmack-urlshortener.herokuapp.com/'},
      {name: 'Timestamp API Microservice', tags: ['Node.js', 'API'], description: 'An API that returns JSON data with a UNIX timestamp', src: 'https://github.com/ryanjmack/timestamp-microservice', demo: 'https://ryanmack-timestamp-api.herokuapp.com/'},
      {name: 'Request Header Microservice', tags: ['Node.js', 'API'], description: 'An API that returns JSON data about the user, including their ip address, language and software', src: 'https://github.com/ryanjmack/request-header-microservice', demo: 'https://ryanmack-request-header.herokuapp.com'},
      {name: 'Calculator', tags: ['JavaScript'], description: 'A web based calculator', src: 'https://github.com/ryanjmack/calculator', demo: 'https://ryanjmack.github.io/calculator/'},
      {name: 'Cat Fact Generator', tags: ['Local Storage', 'JavaScript'], description: 'A random cat fact generator', src: 'https://github.com/ryanjmack/cat-fact-generator', demo: 'https://ryanjmack.github.io/cat-fact-generator/'},
      {name: 'Mock Landing Page', tags: ['JavaScript', 'Responsive Design'], description: 'A responsive landing page', src: 'https://github.com/ryanjmack/mock-landing-page', demo: 'https://ryanjmack.github.io/mock-landing-page'},
      {name: 'United States GDP Visualization', tags: ['D3.js', 'SCSS'], description: 'A visualization of the United States GDP from 1947-2018', src: 'https://github.com/ryanjmack/US-GDP-Visualization/', demo: 'https://ryanjmack.github.io/US-GDP-Visualization/'},
      {name: 'Alp D\'Huez Cycling Visualization', tags: ['D3.js', 'SCSS'], description: 'A visualization of the fastest climbs up the famous Alp D\'Huez', src: 'https://github.com/ryanjmack/Professional-Cycling-Scatterplot/', demo: 'https://ryanjmack.github.io/Professional-Cycling-Scatterplot/'},
      {name: 'Technical Documentation Page', tags: ['SCSS', 'Responsive Design'], description: 'A clone of a MDN Web Documentation Page', src: 'https://github.com/ryanjmack/fcc-technical-documentation-page', demo: 'https://ryanjmack.github.io/fcc-technical-documentation-page'},
      {name: 'Pomodoro Clock', tags: ['JavaScript', 'Responsive Design'], description: 'A pomodoro clock with customizable settings', src: 'https://github.com/ryanjmack/pomodoro-clock', demo: 'https://ryanjmack.github.io/pomodoro-clock'},
      {name: 'Local Weather Viewer', tags: ['Geolocation', 'API'], description: 'Displays user\'s local weather using geolocation', src: 'https://github.com/ryanjmack/Local-Weather', demo: 'https://ryanjmack.github.io/Local-Weather'}
    ].map((project, i) => {
      // https://stackoverflow.com/a/43892905/6894170
      return (
        <div className='Portfolio__card' key={i}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className='Portfolio__links'>
            <a href={project.src} target="_blank">Github</a>
            <a href={project.demo} target="_blank">Demo</a>
          </div>
          <p>{
            project.tags.map((tag, i) => {
              return (<span key={i} className='Portfolio__tag'>{tag}</span>)
            })
          }
          </p>
        </div>
      );
    });

    return (
      <div>
        <div className='Portfolio__title'>
          <h1>Portfolio</h1>
        </div>
        <main className='Portfolio'>
          {portfolio}
        </main>
      </div>
    );
  }

  render() {
    return this.generateCards();
  }
}

export default Portfolio;
