import React, { useEffect } from 'react'
import ScrollReveal from "scrollreveal";

const Btncontacto = () => {

  useEffect(() => {

    ScrollReveal().reveal(".btn-contacto", {
      opacity: 0,  // Inicia invisible
      scale: 0.9,  // Inicia levemente reducido
      duration: 1000,
      easing: "ease-in-out",
      reset: false, // Solo se ejecuta una vez
    });

  }, []);

  return (
    <section id='contactarme' className='container-fluid contenedor-contacto'>
        <div className="row">
            <div className='col-12'>
                <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer"><button className='btn-contacto'>Contactarme</button></a>
            </div>
        </div>
    </section>
  )
}

export default Btncontacto
