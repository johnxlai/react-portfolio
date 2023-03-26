import PortfolioList from '../PortfolioList';

function Portfolio() {
  return (
    <section
      id="recent-work"
      className="recent-work text-white"
      title="John Lai's Full Stack Portfolio">
      <h3 className="uppercase">Recent Work</h3>
      <PortfolioList />
    </section>
  );
}
export default Portfolio;
