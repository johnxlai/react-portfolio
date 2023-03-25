import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul className="flex gap-3 p-2 bg-primary text-white">
        <li className="hover:bg-secondary p-2">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={
              currentPage === 'About'
                ? 'font-bold uppercase active'
                : 'font-bold uppercase'
            }>
            About
          </a>
        </li>
        <li className="hover:bg-secondary p-2">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={
              currentPage === 'Portfolio'
                ? 'font-bold uppercase active'
                : 'font-bold uppercase'
            }>
            Portfolio
          </a>
        </li>
        <li className="hover:bg-secondary p-2">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact'
                ? 'font-bold uppercase active'
                : 'font-bold uppercase'
            }>
            Contact
          </a>
        </li>
        <li className="hover:bg-secondary p-2">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={
              currentPage === 'Resume'
                ? 'font-bold uppercase active'
                : 'font-bold uppercase'
            }>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
