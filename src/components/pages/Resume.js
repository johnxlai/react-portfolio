import React from 'react';

function Resume() {
  return (
    <div className="resume text-center">
      <h3 className="uppercase mb-5">Resume</h3>
      <div className="resume-container mb-5">
        <a
          className="inline-flex items-center bg-secondary text-white py-2 px-4 rounded hover:bg-green-900"
          href="./resume/john-lai-resume.pdf"
          download>
          <h5 className="mr-2">Download Resume</h5>
          <i className="fa fa-file-text-o"></i>
        </a>
      </div>
      <div className="mx-auto w-1/2">
        <h5 className="mb-5 text-xl">EDUCATION:</h5>
        <ul>
          <li className="mb-3">
            <h6>Full Stack Development</h6>
            <p>University of Toronto, Toronto, ON</p>
          </li>
          <li className="mb-3">
            <h6>Front-End Web Development Immersive</h6>
            <p>HackerYou (Juno), Toronto, ON (April - June 2015)</p>
          </li>
          <li className="mb-3">
            <h6>Web Optimization Analyst, Recognition of Achievement</h6>
            <p>Seneca College, Toronto, ON (Sept 2014)</p>
          </li>
          <li className="mb-3">
            <h6>Advertising & Graphic Design, Diploma</h6>
            <p>Humber College, Toronto, ON (2010 - 2012)</p>
          </li>
          <li className="mb-3">
            <h6>Creative Advertising, Diploma</h6>
            <p>Seneca at York, Toronto, ON (2008 -2010)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;
