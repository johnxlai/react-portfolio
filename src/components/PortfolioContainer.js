// import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './Header';
// import Main from './components/Main';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="PortfolioContainer flex flex-col bg-secondary text-white h-full">
      <header className="py-10 flex container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Header />
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>

      <main className={`py-10 px-5 bg-primary ${currentPage}`}>
        <div className="container mx-auto">{renderPage()}</div>
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
