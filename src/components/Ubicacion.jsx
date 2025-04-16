import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const Ubicacion = () => {

    useEffect (() => {

    ScrollReveal().reveal('.ubicacion-title', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.contenedor-mapa', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 400,
      easing: 'ease-in-out',
      reset: false
    });

  }, []);

  return (
    <section id='ubicacion' className='container-fluid contenedor-ubicacion'>
      <h2 className="text-center ubicacion-title">Ubicación</h2>
      
      <div className='row contenedor-mapa'>
        <div className='mapa'>

            <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13104.056630620967!2d-58.42623776899228!3d-34.57879937142695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzQwLjAiUyA1OMKwMjUnMjAuMCJX!5e0!3m2!1ses-419!2sar!4v1696623417321!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Ubicacion
