import React, { useEffect, useState } from 'react'
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

const Navbar = () => {

  const [activeSection, setActiveSection] = useState(''); // Estado para saber en donde estamos

  useEffect(() => {

    Splitting(); // se ejecuta al montar y divide el texto por letras para efecto candado
    const sections = document.querySelectorAll("section[id]"); //Selecciona todas las secciones que tengan un id, por ejemplo <section id="inicio">.
    const observer = new IntersectionObserver ( // Observa si esas secciones están en pantalla. Si alguna entra en el viewport, actualiza el activeSection para que el link correspondiente se resalte.
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

    return () => { // Cuando el componente se desmonta, detiene la observación para no dejar procesos colgados.
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
      <div className="container-fluid d-flex contenedor-fluido">
        
        {/* Columna izquierda vacía con mismo ancho que el botón */}
        {/* <div className="navbar-placeholder" />  className='navbar-center'> */} 

        <div className='navbar-contendor-elementos'>
          <a href="#inicio" onClick={scrollToTop}>  
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
                <a data-splitting className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} href="#inicio"
                >
                  INICIO
                </a>
              </li>

              <li className="nav-item">
                <a data-splitting className={`nav-link ${activeSection === 'sobre-mi' ? 'active' : ''}`} href="#sobre-mi"onClick={() => setActiveSection('sobre-mi')}>
                  SOBRE MÍ
                </a>
              </li>

              <li className="nav-item">
                <a data-splitting className={`nav-link ${activeSection === 'habilidades' ? 'active' : ''}`} href="#habilidades"onClick={() => setActiveSection('habilidades')}>
                  HABILIDADES
                </a>
              </li>

              <li className="nav-item">
                <a data-splitting className={`nav-link ${activeSection === 'proyectos' ? 'active' : ''}`} href="#proyectos"onClick={() => setActiveSection('proyectos')}>
                  PROYECTOS
                </a>
              </li>

              {/* <li className="nav-item">
                <a data-splitting className={`nav-link ${activeSection === 'sobre-mi' ? 'active' : ''}`} href="#contactame"onClick={() => setActiveSection('sobre-mi')}>
                  CONTÁCTAME
                </a>
              </li> */}
              
            </ul>

          </div>
        </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar
