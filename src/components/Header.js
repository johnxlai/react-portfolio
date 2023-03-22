import React from 'react';

function Header() {
  return (
    // <div className="relative btn-test">
    //   <h1 className="test">test</h1>
    //   <button class="btn-gone">text1</button>
    //   <button class="btn-gone">text2</button>
    // </div>
    <header className="main-header">
      <section title="Navigation Container" class="container">
        <div class="row">
          <div class="col-12 col-header">
            {/* <div class="logo-container">
              <img
                class="jl-logo"
                src="./assets/img/jlai-logo-2023-no-bg.svg"
                alt="John Lai's Logo"
              />
              <h2 class="text-uppercase text-white">John Lai</h2>
            </div> */}

            <button
              class="mobile-nav-toggle"
              aria-controls="main-nav"
              aria-expanded="false">
              <span class="sr-only">Menu</span>
              <i class="fa fa-bars"></i>
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
export default Header;
