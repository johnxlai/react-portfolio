import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-contact bg-primary">
        <div className="container mx-auto py-10 relative flex justify-center h-[18rem]">
          <div className="bg-secondary say-hello p-12 absolute top-[3rem]">
            <h3 className="uppercase text-3xl text-white mb-3">Say Hello</h3>
            <ul>
              <li>
                <a className="block mb-3" href="mailto:lai.john.py@gmail.com">
                  Email: lai.john.py@gmail.com
                </a>
              </li>
              <li>
                <a className="block mb-3" href="tel:6472966528">
                  Call: 647.296.6528
                </a>
              </li>
              <li>
                <ul className="social-icons flex">
                  <li className="">
                    <a
                      className="mr-3"
                      href="https://www.linkedin.com/in/johnxlai"
                      target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mr-3"
                      href="https://github.com/johnxlai"
                      target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className=""
                      href="./resume/john-lai-resume.pdf"
                      download>
                      <i className="fa fa-file-text-o"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="bg-secondary">
        <div className="container mx-auto py-10">
          <div className="flex">
            <div className="w-full">
              <h6 className="text-white text-center">
                © JOHN LAI · All Rights Reserved ·{' '}
                <span className="getYear"></span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
