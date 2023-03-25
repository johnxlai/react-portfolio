import React, { useState } from 'react';

function Header() {
  return (
    <header className="bg-secondary py-10 main-header">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo-container w-[50px] max-w-full flex">
          <img
            className="jl-logo"
            src="/images/jlai-logo-2023.svg"
            alt="John Lai's Logo"
          />
          <h2 className="text-white text-xl">JOHN LAI</h2>
        </div>
      </div>
    </header>
  );
}
export default Header;
