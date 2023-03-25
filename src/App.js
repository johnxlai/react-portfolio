// import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
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
    <div className="App flex flex-col bg-secondary text-white h-full">
      <header className=" py-10 flex container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Header />
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>

      <main>{renderPage()}</main>

      {/* <Main></Main> */}

      <Footer />
    </div>
  );
}

export default App;
