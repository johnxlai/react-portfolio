import React, { useState } from 'react';

function Header() {
  return (
    <div className="flex items-center">
      <img
        className="jl-logo w-[50px] max-w-full mr-4"
        src="./images/jlai-logo-2023.svg"
        alt="John Lai's Logo"
      />
      <h2 className="text-white text-xl">JOHN LAI</h2>
    </div>
  );
}
export default Header;
