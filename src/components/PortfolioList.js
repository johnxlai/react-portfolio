import React from 'react';
import PortfolioItem from './PortfolioItem';

//Accept an array of portfolio items as a prop
const projects = [
  {
    title: 'Merit Ford',
    image: './images/folio/merit-ford.jpg',
    link: 'https://www.meritford.com/',
  },
  {
    title: 'Gateway Hyundai',
    image: './images/folio/gateway-hyundai.jpg',
    link: 'https://hyundaigateway.com/',
  },
  {
    title: 'Petawawa Toyota',
    image: './images/folio/petawawa-toyota.jpg',
    link: 'https://www.petawawa-toyota.com',
  },

  {
    title: 'Travel Me App',
    image: './images/folio/travel-me.png',
    link: 'https://johnxlai.github.io/travel-app/',
  },
  {
    title: 'Fingerspelling Game',
    image: './images/folio/fingerspelling.png',
    link: 'https://asl-fingerspelling-game.herokuapp.com',
  },
  {
    title: 'Movie Trivia',
    image: './images/folio/movie-trivia.jpg',
    link: 'https://johnlai.ca/movies-trivia/',
  },
  {
    title: 'ASL Sign Quiz',
    image: './images/folio/asl-quiz.jpg',
    link: 'https://johnlai.ca/asl-alphabet-quiz/',
  },
];

const PortfolioList = ({ abc }) => {
  return (
    <div className="mx-auto">
      {abc.map((project, index) => (
        <PortfolioItem
          key={index}
          projectNo={index + 1}
          title={project.title}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default PortfolioList;
