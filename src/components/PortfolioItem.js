import React from 'react';

const PortfolioItem = ({ title, image, link, projectNo }) => {
  return (
    <div className="project-container img-on-left">
      <div className="img-container">
        <a href={link}>
          <img className="max-wi-full folio-img-size" src={image} alt="" />
        </a>
      </div>
      <div className="folio-container half-containers">
        <div className="triangle watch">
          <h4>{projectNo}</h4>
        </div>
        <div className="project-title text-white font-weight-bold pl-4 mb-4">
          <h5 className="uppercase mb-10">{title}</h5>
          <a
            href={link}
            className="bg-secondary hover:bg-sky-700 p-4"
            target="_blank">
            View Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
