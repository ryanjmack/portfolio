import React from 'react';
import './About.css';
import resume_docx from './ryan_mack_resume.docx';
import resume_pdf from './ryan_mack_resume.pdf';


class About extends React.Component {

  render() {
    return (
      <main className='About'>
        <div className='About__content'>
          <h1>About</h1>
          <p>I love <span className='About__highlight'>problem solving</span> and <span className='About__highlight'>learning</span> new things. Studying <span className='About__highlight'>Computer Science</span> provides an endless stream of challenges for me; there will never be a day where I run out of new challenges or problems to solve!</p>
          <p>One of my main philosophies for my personal projects is to build most of my projects from <i>scratch</i> with no <span className='About__highlight'>libraries</span> or <span className='About__highlight'>frameworks</span>. It makes things harder, but if it's not hard it's probably not worth doing! This site for example was created utilizing only <span className="About__highlight">React.js</span>, and most of my web projects were built with plain ole <span className="About__highlight">JavaScript</span>.</p>
          <p>I currently attend <span className='About__highlight'>Oregon State University</span> and I am on my way to earning a B.S. in Computer Science! I have been exposed to many concepts along the way which has allowed me to appreciate computers, technology and abstractions.</p>
          <p>While I'm not programming I'm probably doing something <span className='About__highlight'>outdoors</span> and usually active like <span className='About__highlight'>cycling</span> 50+ miles, <span className='About__highlight'>hiking</span> somewhere cool like Yosemite Falls (the tallest waterfall in North America) or Mt. Elbert (the tallest mountain in Colorado), or <span className='About__highlight'>playing sports</span> with my friends at a park.</p>
          <p>While recovering from my strenuous activities I enjoy <span className='About__highlight'>cooking</span>, playing <span className='About__highlight'>videogames</span>, or watching <span className='About__highlight'>documentaries</span>. Remember I told you I love learning new things? I wasn't lying!</p>
          <p className="About__last-paragraph">If you want to learn about my background a little more you can take a look at my resume below!</p>
          <p><a className='About__resume' href={resume_docx} download>Resume (.docx)</a></p>
          <p><a className='About__resume' href={resume_pdf} download>Resume (.pdf)</a></p>
        </div>
      </main>
    );
  }
}

export default About;
