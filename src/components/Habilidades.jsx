import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

// Arrays de Imagenes tecnologias
const tecnologiasUno = [
  { src: '/imgs/tecnologias/html.png', alt: 'html' },
  { src: '/imgs/tecnologias/css.png', alt: 'css' },
  { src: '/imgs/tecnologias/sass.png', alt: 'sass' },
  { src: '/imgs/tecnologias/bootstrap.png', alt: 'bootstrap' },
];

const tecnologiasDos = [
  { src: '/imgs/tecnologias/js.png', alt: 'js' },
  { src: '/imgs/tecnologias/react.png', alt: 'react' },
  { src: '/imgs/tecnologias/nodejs.png', alt: 'nodejs' },
  { src: '/imgs/tecnologias/mongodb.png', alt: 'mongodb' }
];

const Habilidades = () => {

  // Para que se pause en mobile
  useEffect(() => {
    const filas = document.querySelectorAll('.fila');
  
    const pauseAnimation = () => filas.forEach(fila => fila.style.animationPlayState = 'paused');
    const playAnimation = () => filas.forEach(fila => fila.style.animationPlayState = 'running');
  
    filas.forEach(fila => {
      fila.addEventListener('touchstart', pauseAnimation);
      fila.addEventListener('touchend', playAnimation);
    });
  
    return () => {
      filas.forEach(fila => {
        fila.removeEventListener('touchstart', pauseAnimation);
        fila.removeEventListener('touchend', playAnimation);
      });
    }
  }, []);

  // Duplicamos las tecnologías para scroll infinito
  const filaSuperior = Array(5).fill(tecnologiasUno).flat();
  const filaInferior = Array(5).fill(tecnologiasDos).flat();
  
  return (

    <section className='seccion-habilidades container-fluid'>
      {/* Titulo */}
      <div className='contenedor-titulo'>
        <h2 className='habilidades-titulo text-center'>Habilidades</h2>
      </div>

      <div className='contenedor-habilidades'>
        {/* Fila superior */}
        <div id='habilidades' className='fila fila-superior col-12'>
          {[...filaSuperior, ...filaSuperior].map((tecno, index) => (
            <div key={index} className='card'>
              <img src={tecno.src} alt={tecno.alt} />
            </div>
          ))}
        </div>

        {/* Fila inferior */}
        <div className='fila fila-inferior col-12'>
          {[...filaInferior, ...filaInferior].map((tecno, index) => (
            <div key={index} className='card'>
              <img src={tecno.src} alt={tecno.alt} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Habilidades
