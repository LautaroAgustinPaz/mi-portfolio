import React from 'react'

const Habilidades = () => {
  
  return (
    // Tiutulo
    <section  id='habilidades' className='container-fluid seccion-habilidades'>
      <div className='contenedor-titulo'>
        <h2 className='habilidades-titulo text-center'>Habilidades</h2>
      </div>

      <div className="row contenedor-habilidades">

        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/html.png" alt="html"/>
        </div>
        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/css.png" alt="css"/>
        </div>
        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/sass.png" alt="sass"/>
        </div>
        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/bootstrap.png" alt=""/>
        </div>
        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/js.png" alt=""/>
        </div>
        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/react.png" alt=""/>
        </div>
        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/nodejs.png" alt=""/>
        </div>
        <div className='card card-html col-lg-3'>
          <img src="public/imgs/tecnologias/mongodb.png" alt=""/>
        </div>
    
      </div>
    </section>
  )
}

export default Habilidades
