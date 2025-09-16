import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
         });
     };
    
  return (
    <div>
    <div class="separador">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path d="M0,224 C360,96 1080,352 1440,192" 
      fill="none" 
      stroke="#ffffff"
      stroke-width="2" />
  </svg>
</div>
    <section className='container-fluid contenedor-footer'>
        <div className='row'>

            {/* Columna 1 - Foto */}
            <div className="col-sm-12 col-md-4 columna-img">
                <img src="public/imgs/logo-lautaropaz.png" alt="Logo" className="img-fluid footer-img" loading="lazy"></img>
            </div>

            {/* Columna 2 - Indice */}
            <div className="col-xs-12 col-sm-6 col-md-4 columna-indice">
                <h5 className="indice-titulo">Índice</h5>
                <ul className="list-unstyled indice-lista">
                    <li><a href="#sobre-mi" className="indice-text text-decoration-none">Sobre mí</a></li>
                    <li><a href="#habilidades" className="indice-text text-decoration-none">Habilidades</a></li>
                    <li><a href="#proyectos" className="indice-text text-decoration-none">Proyectos</a></li>
                    <li><a href="#contacto" className="indice-text text-decoration-none">Contacto</a></li>
                </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div className="col-xs-12 col-sm-6 col-md-4 columna-contacto">
                <h5 className="contacto-titulo">Contacto</h5>
                <div className='contenedor-parrafos'>   
                    <p className='contacto-p'><i className="icono-email fa-solid fa-square-envelope"></i> lautaropaz__@hotmail.com</p>
                </div>
                <div className='contenedor-redes-sociales'>
                    <div className='contenedor-redondo'><a href="https://github.com/LautaroAgustinPaz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}  className='iconos-redes'/></a></div>
                    <div className='contenedor-redondo'><a href="https://www.linkedin.com/in/lautaro-paz-71795b243/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn}  className='iconos-redes'/></a></div>
                </div>
            </div>     
        </div>
        
        {/* Columna - Boton Arriba */}
        <div className='container-fluid columna-btn-arriba'>
            <div className='row'>
                <div className='col-12 contenedor-btn-arriba'>
                    <div className="btn-arriba" onClick={handleScrollToTop}>
                        <FontAwesomeIcon icon={faChevronUp} className="icon-arriba" />
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright y Firma */}
        <div className='container-fluid columna-copyright'>
            <div className='row'>
                <div className='col-12 contenedor-copyright'>
                    <div className='negocio-y-derechos'>
                        <p className='parrafo'>2025 - Lautaro Paz</p>
                        <p className='parrafo'>Todos los derechos reservados.</p>
                    </div>
                    <p className='firma'>Desarrollada por: <br /><a href="https://www.linkedin.com/in/lautaro-paz-71795b243/" target="_blank" rel="noopener noreferrer">Lautaro Paz</a></p>
                </div>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Footer
