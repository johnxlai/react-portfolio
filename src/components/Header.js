import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function Header() {
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
    <header className="bg-secondary py-10 main-header">
      <div className="container mx-auto">
        <div class="logo-container">
          <img class="jl-logo" src="" alt="John Lai's Logo" />
          <h2 class="text-white text-xl">JOHN LAI</h2>
        </div>

        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>

      {renderPage()}
    </header>
  );
}
export default Header;
