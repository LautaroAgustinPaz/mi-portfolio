import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver (
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { 
      threshold: 0.3 ,
      rootMargin: '50px'
    } 
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Columna izquierda vacía con mismo ancho que el botón */}
        <div className="navbar-placeholder" />

        <div className='navbar-contendor-elementos'>
          <a href="#inicio" onClick={scrollToTop} className='navbar-center'>
          <img className='navbar-logo' src="imgs/logo-lautaropaz.png" width="50" height="50" fetchpriority="high" alt='logo' onClick={scrollToTop} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
        </div>

        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {/* BODY */}
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} 
                  href="#inicio"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'sobre-mi' ? 'active' : ''}`} 
                  href="#sobre-mi"
                  onClick={() => setActiveSection('sobre-mi')}
                >
                  Sobre mí
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar
