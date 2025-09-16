import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react'

const SobreMi = () => {

    useEffect(() => {

    ScrollReveal().reveal('.habilidades-titulo', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });

    // Animación para el botón "Elegir otra categoria"
    ScrollReveal().reveal('.sobre-mi_row', {
      origin: 'right',
      distance: '100px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });
  }, []);
    
  return (

    <section className='container-fluid contenedor-sobremi'>
      <div className='contenedor-titulo'>
        <h2 className='sobre-mi_titulo text-center'>Sobre mi</h2>
      </div>

        <div id='sobre-mi' className="row sobre-mi_row">

            <div className="col-sm-12 col-md-6 col-lg-6 columna-biografia">
                <h2 className='biografia_titulo'>Hola, soy</h2>
                <h2 className='biografia-titulo-2'>Lautaro Paz</h2>
                <p className='biografia_parrafo'>Un Programador Full Stack de 23 años de Argentina. <br />
                  
                  Me gusta participar en proyectos donde el diseño y la performance van de la mano. Valoro el trabajo en equipo y busco siempre generar un ambiente empático y colaborativo. Estoy en constante aprendizaje, tanto a nivel técnico como personal.</p>

                <div className='grupo-redes-sociales'>
                    <div className='contenedor-redondo'><a href="https://www.linkedin.com/in/lautaro-paz-71795b243/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}  className='iconos-redes'/></a></div> 
                    <div className='contenedor-redondo'><a href="/CV-LautaroPaz.pdf" dowloand><FontAwesomeIcon icon={faFileLines}  className='iconos-redes'/></a></div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 columna-img">
              <img className='foto-biografia' src="/imgs/foto-me.jpg" alt="foto-tatuador" loading="lazy"/>
            </div>
        </div>
    </section>
    
  )
}

export default SobreMi
