import React from 'react';

const PortfolioItem = ({ projectName, projectRole }) => {
  return (
    <div>
      {projectName}, {projectRole}
    </div>
  );
};

export default PortfolioItem;
