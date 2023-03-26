import React from 'react';
import PortfolioItem from './PortfolioItem';
//Accept an array of portfolio items as a prop
const PortfolioList = ({ projects }) => {
  const renderedProjects = projects.map((project) => {
    return <PortfolioItem project={project} />;
  });

  return <div className="flex flex-wrap"> {renderedProjects}</div>;
};

export default PortfolioList;
