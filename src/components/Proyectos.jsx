import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// PROYECTOS
const proyectos = [{
  id: 1,
  titulo: 'PORTFOLIO TATUADOR',
  imagen: "imgs/proyectos/tatto-portfolio.jpg",
  parrafo: "Landing page elegante desarrollada con Vite, HTML semántico, SCSS y JavaScript. Pensada para tatuadores que desean mostrar su trabajo con estilo, incluye efectos visuales armónicos y una carga fluida para una experiencia intuitiva.",
  link: "https://landing-page-tatto-portfolio.vercel.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/landingPage-TattoPortfolio"
},
{
  id: 2,
  titulo: 'QUICK TASK',
  imagen: "imgs/proyectos/quick-task.jpg",
  parrafo: "Aplicación CRUD en React que se conecta a una API REST (MockAPI), permitiendo crear, editar y eliminar tareas desde la interfaz de usuario de manera ágil y dinámica.",
  link: "https://quick-task-pruebatenica.netlify.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/quick-task"
}
]

const Proyectos = () => {

  const [visibleInfo, setVisibleInfo] = useState(null);

  const toggleOverlay = (proyectoid) => {
    // Si ya está visible este mismo proyecto, lo oculto
    if (visibleInfo === proyectoid) {
      setVisibleInfo(null);
    } else {
      // Si es otro proyecto, lo muestro
      setVisibleInfo(proyectoid);
    }
  };

  const alternarSuperposicion = (id) => {
    setVisibleInfo()
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='seccion-proyectos container-fluid'>
    
        {/* Titulo     */}
        <div className='contenedor-titulo'>
            <h2 className='habilidades-titulo text-center'>Proyectos</h2>
        </div>

        {/* Slide */}
        <Slider {...settings}>
          {proyectos.map((proyecto) => (

            <div key={proyecto.id} className='slide-proyecto'  id="proyectos">
              
              {/* Overlay de info */}
              <div className={`slide ${visibleInfo === proyecto.id ? 'mostrar-overlay' : 'ocultar-overlay'}`}>
                <img src={proyecto.imagen} alt={proyecto.titulo} className="img-fondo" />

                <div className="slide-card">
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.parrafo}</p>
                  <div className="botones">
                    <a href={proyecto.link} className="btn negro" target="_blank">VISITAR</a>
                    <a href={proyecto.repositorio} className="btn blanco" target="_blank">REPOSITORIO</a>
                  </div>
                </div>

                {/* Botón solo visible en mobile */}
                <button className="toggle-overlay" onClick={() => toggleOverlay(proyecto.id)}>
                  {visibleInfo === proyecto.id ? "No ver info" : "Ver info"}
                </button>
              </div>
            </div>
          ))}
        </Slider>

    </section>
  )
}

export default Proyectos
