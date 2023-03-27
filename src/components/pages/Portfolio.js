import PortfolioList from '../PortfolioList';
const abc = [
  {
    title: 'Merisdfsafsdfst Ford',
    image: './images/folio/merit-ford.jpg',
    link: 'https://www.meritford.com/',
  },
];
function Portfolio() {
  return (
    <section
      id="recent-work"
      className="recent-work text-white"
      title="John Lai's Full Stack Portfolio">
      <h3 className="uppercase text-center">Recent Work</h3>
      <PortfolioList props={abc} />
    </section>
  );
}
export default Portfolio;
