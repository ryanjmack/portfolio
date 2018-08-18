import React from 'react';
import './Portfolio.css';


class Portfolio extends React.Component {

  generateCards() {
    const pics = [
      {fileName: 'calculator', name: 'Calculator', alt: 'calculator', description: 'A calculator built with vanilla JS', src: 'https://github.com/ryanjmack/calculator', demo: 'https://ryanjmack.github.io/calculator/'},
      {fileName: 'catFacts', name: 'Cat Fact Generator', alt: 'Cat Fact Generator', description: 'Generates random cat facts', src: 'https://github.com/ryanjmack/cat-fact-generator', demo: 'https://ryanjmack.github.io/cat-fact-generator/'},
      {fileName: 'cycling', name: 'Alp D\'Huez Cycling Visualization', alt: 'Doping in Professional Bicycle Racing', description: 'A D3.js visualization of the fastest climbs up the famous Alp D\'Huez', src: 'https://github.com/ryanjmack/Professional-Cycling-Scatterplot/', demo: 'https://ryanjmack.github.io/Professional-Cycling-Scatterplot/'},
      {fileName: 'gdp', name: 'US GDP Visualization', alt: 'United States GDP', description: 'A D3.js visualization of the United States GDP from 1947-2018', src: 'https://github.com/ryanjmack/US-GDP-Visualization/', demo: 'https://ryanjmack.github.io/US-GDP-Visualization/'},
      {fileName: 'heatMap', name: 'Global Land Temperature Visualization', alt: 'Heatmap visualization from 1880-2018', description: 'A D3.js visualization of the mean temperature variance from 1880-2018 compared to the 20th century average', src: 'https://github.com/ryanjmack/Global-Surface-Temperature', demo: 'https://ryanjmack.github.io/Global-Surface-Temperature/'},
      {fileName: 'landingPage', name: 'Mock Landing Page', alt: 'Mock Landing Page', description: 'A responsive landing page built from scratch', src: 'https://github.com/ryanjmack/mock-landing-page', demo: 'https://ryanjmack.github.io/mock-landing-page'},
      {fileName: 'markdown', name: 'React Markdown Previewer', alt: 'Markdown Previewer', description: 'A live markdown previewer built with react', src: 'https://github.com/ryanjmack/Markdown-Previewer', demo: 'https://ryanjmack.github.io/Markdown-Previewer'},
      {fileName: 'mdn', name: 'MDN Documentation Clone', alt: 'Technical Documentation Page', description: 'A clone of a MDN Web Documentation Page', src: 'https://github.com/ryanjmack/fcc-technical-documentation-page', demo: 'https://ryanjmack.github.io/fcc-technical-documentation-page'},
      {fileName: 'pomodoro', name: 'Pomodoro Clock', alt: 'Pomodoro Clock', description: 'A pomodoro clock built with vanilla JavaScript', src: 'https://github.com/ryanjmack/pomodoro-clock', demo: 'https://ryanjmack.github.io/pomodoro-clock'},
      {fileName: 'ticTacToe', name: 'Tic Tac Toe', alt: 'Tic Tac Toe', description: 'An unbeatable tic tac toe game, built with vanilla JavaScript', src: 'https://github.com/ryanjmack/tic-tac-toe', demo: 'https://ryanjmack.github.io/tic-tac-toe'},
      {fileName: 'weather', name: 'Local Weather', alt: 'Local Weather Viewer', description: 'A website that uses geolocation and a weather API to show users their local weather', src: 'https://github.com/ryanjmack/Local-Weather', demo: 'https://ryanjmack.github.io/Local-Weather'}
    ].map(img => {
      const src = require(`./images/${img.fileName}.png`);

      return (
        <div className='Portfolio__card'>
          <figure>
            <figcaption>{img.name}</figcaption>
            <img src={src} alt={img.alt}/>
          </figure>
          <a href={img.src}>Github</a>
          <a href={img.demo}>Demo</a>
          <p>{img.description}</p>
        </div>
      );
    });


    return (
      <main className='Portfolio'>
        {pics}
      </main>
    );
  }

  render() {
    return this.generateCards();
  }
}

export default Portfolio;
