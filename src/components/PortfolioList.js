import React from 'react';
import PortfolioItem from './PortfolioItem';

//Accept an array of portfolio items as a prop
const projects = [
  { name: 'Billy', role: 'admin' },
  { name: 'Sally', role: 'contributor' },
];

const PortfolioList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <PortfolioItem
          key={index}
          projectName={project.name}
          projectRole={project.role}
        />
      ))}
    </div>
  );
};

export default PortfolioList;
