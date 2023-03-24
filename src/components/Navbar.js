import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <>
      <ul className="flex gap-3 p-2 bg-primary text-white">
        <li className="hover:bg-secondary p-2">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={
              currentPage === 'About' ? 'nav-link active' : 'nav-link'
            }>
            About
          </a>
        </li>
        <li className="hover:bg-secondary p-2">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={
              currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
            }>
            Portfolio
          </a>
        </li>
        <li className="hover:bg-secondary p-2">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
            }>
            Contact
          </a>
        </li>
        <li className="hover:bg-secondary p-2">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={
              currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
            }>
            Resume
          </a>
        </li>
      </ul>
    </>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">
    //       John Lai
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Portfolio
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
