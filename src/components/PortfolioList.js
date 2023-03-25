import React from 'react';
import PortfolioItem from '../PortfolioItem';

//Accept an array of portfolio items as a prop
const PortfolioList = (projects) => {
  const renderedList = projects.map((project) => {
    return <PortfolioItem project={project} />;
  });

  return <div className="flex flex-wrap">{renderedList}</div>;
};

export default PortfolioList;
