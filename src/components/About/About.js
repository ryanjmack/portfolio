import React from 'react';
import './About.css';

class About extends React.Component {

  render() {
    return (
      <main className='About'>
        <div className='About__content'>
          <h1>About</h1>
          <p>I love <span className='About__highlight'>problem solving</span> and <span className='About__highlight'>learning</span> new things. Studying <span className='About__highlight'>Computer Science</span> provides an endless stream of challenges for me; there will never be a day where I run out of new challenges or problems to solve!</p>
          <p>I was introduced to the world of programming by an acquaintance who recommended me to give web development a shot. I started my journey learning <span className='About__highlight'>HTML</span> and <span className='About__highlight'>CSS</span>. The next logical step was to start learning a real programming language <span className='About__highlight'>JavaScript</span>!</p>
          <p>One of my main philosophies was to learn the basics before reaching for abstractions; most of my learning projects were created from <i>scratch</i> with no <span className='About__highlight'>libraries</span> or <span className='About__highlight'>frameworks</span> except for <span className='About__highlight'>sass</span> (which makes CSS a lot more palatable), or a simple taskrunner such as <span className='About__highlight'>gulp</span>. I don't want to learn jQuery or Bootstrap syntax, I want to know how they work. As I progressed, I felt that a strong foundation in the basics of CS would be beneficial, so I completed <a href='https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x'>Harvard's CS50</a> and <a href='https://www.edx.org/course/introduction-to-computer-science-and-programming-using-python'>MIT's Intro to CS using Python</a>. This continued to push me deeper in to Computer Science.</p>
          <p>Fortunately I was accepted in to <span className='About__highlight'>Oregon State's Computer Science program</span> and I am on my way to earning a B.S. in Computer Science! I have been exposed to many concepts along the way at differing levels of abstraction, from using <span className='About__highlight'>assembly language</span> to <span className='About__highlight'>C/C++</span> and also several higher level languages. I've always been fascinated at how some <span className='About__highlight'>abstractions</span> work under the hood and my coursework has allowed me to appreciate computers, technology and abstractions</p>
          <p>My attitude is that I've done it, I can do it, or I can learn how to do it!</p>
          <p>Well anyways if you want to learn about me a little more you can take a look at my resume below!</p>
          <p><a className='About__resume' href='./ryan_mack_resume.docx' download>ryan_mack_resume.docx</a></p>
          <p><a className='About__resume' href='./ryan_mack_resume.pdf' download>ryan_mack_resume.pdf</a></p>
        </div>
      </main>
    );
  }
}

export default About;
