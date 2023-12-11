import React from "react";
import "./Resume.css";


const Resume = () => {
  return (
    <div className="container" style={{backgroundColor: 'blue'}}>
        <div className="row">
          <div className="col-md-6">
          <section className="experience" style={{backgroundColor: 'red',marginBottom: '2em'}}>
        <h3>Experience</h3>
        <ul>
          <li>
            
            <h4>Senior Front End Developer</h4>
            <h5>Apple Inc.</h5>
            <h6>2020 - Present</h6>
            <p>
              Developed and maintained web applications using ReactJS, Node.js, and
              MongoDB.
            </p>
          </li>
          <li>
            
            <h4>Junior Front End Developer</h4>
            <h5>Dribbble Inc.</h5>
            <h6>2018 - 2020</h6>
            <p>
              Developed and maintained web applications using ReactJS, HTML, and
              CSS.
            </p>
          </li>
          <li>
            
            <h4>HTML Developer</h4>
            <h5>Adobe Inc.</h5>
            <h6>2017 - 2018</h6>
            <p>Developed and maintained web pages using HTML, CSS, and JavaScript.</p>
          </li>
        </ul>
      </section>
          </div>
          <div className="col-md-6" >
          <section className="education" style={{backgroundColor: 'green',marginBottom: '2em'}}>
        <h3>Education</h3>
        <ul>
          <li>
            
            <h4>Master of Science in Computer Engineering</h4>
            <h5>Harvard University</h5>
            <h6>2015 - 2017</h6>
          </li>
          <li>
            
            <h4>Bachelor of Science in Computer Engineering</h4>
            <h5>University of California, Berkeley</h5>
            <h6>2014 - 2015</h6>
          </li>
        </ul>
      </section>
          </div>
        </div>
    </div>
  );
};

export default Resume;

