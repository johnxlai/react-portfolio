import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center text-center about-container">
      <img
        className="max-w-full w-[200px] rounded-full mb-4"
        src="./images/john-lai-profile.jpg"
        alt="John Lai's Photo"
      />
      <h1 className="">JOHN LAI</h1>
      <h2 className="text-uppercase mb-6">Full Stack Dev</h2>
      <div className="w-1/2">
        <p>
          I’m a Toronto-based Full Stack Developer, a recent graduate from the
          full time University Of Toronto Bootcamp.
        </p>
        <p>
          As a graduate from Creative Advertising at Seneca and Advertising &
          Graphic Design at Humber College, I landed an internship at Normark
          Inc. (Rapala Canada), where I designed products that are now being
          sold at chain retailers across Canada such as Le Baron, Canadian Tire,
          and Wal-Mart. Upon completion of the internship, I worked as a Web
          Content Designer & SEO Specialist at Jonas Club Software. At Jonas,
          I’ve worked on over 200 websites, building web content and adjusting
          layouts using HTML and CSS.
        </p>
        <p>
          I worked as a Front-End Developer at Carpages.ca where I've worked on
          over 300 websites converting photoshop, sketch and figma mockup to
          wordpress site using bootstrap and tailwind.
        </p>
      </div>
    </div>
  );
}

export default About;
