import React from 'react';
import PortfolioItem from './PortfolioItem';

//Accept an array of portfolio items as a prop
const projects = [
  {
    title: 'MERIT FORD',
    image: './images/folio/merit-ford.jpg',
    link: 'https://www.meritford.com/',
  },
];

const PortfolioList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <PortfolioItem
          key={index}
          title={project.title}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default PortfolioList;
