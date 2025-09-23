import { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollReveal from "scrollreveal";

// Array de Obj. de proyectos personales
const proyectos = [{
  id: 1,
  titulo: 'PORTFOLIO TATUADOR',
  imagen: "imgs/proyectos/tatto-portfolio.jpg",
  imagenMobile: "imgs/proyectos/tatto-portfolio-mobile.jpg",
  parrafo: "Landing page elegante desarrollada con Vite, HTML semántico, SCSS y React. Pensada para tatuadores que desean mostrar su trabajo con estilo, incluye efectos visuales armónicos y una carga fluida para una experiencia intuitiva.",
  link: "https://landing-page-tatto-portfolio.vercel.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/landingPage-TattoPortfolio"
},
{
  id: 2,
  titulo: 'QUICK TASK',
  imagen: "imgs/proyectos/quick-task.jpg",
  imagenMobile: "imgs/proyectos/quick-task-mobile.jpg",
  parrafo: "Aplicación CRUD en React que se conecta a una API REST (MockAPI), permitiendo crear, editar y eliminar tareas desde la interfaz de usuario de manera ágil y dinámica.",
  link: "https://quick-task-pruebatenica.netlify.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/quick-task"
}
]

const Proyectos = () => {

  // Efecto para animación al hacer scroll
  useEffect(() => {
    ScrollReveal().reveal('.contenedor-slide', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 300,
      easing: 'ease-in-out',
      reset: false
    });

  }, []);

  // Uso de la libreria "Slick Carrusel"
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,     
    centerPadding: "0px"
  };

  // Ningún proyecto está abierto (null)
  const [visibleInfo, setVisibleInfo] = useState(null);


  const toggleOverlay = (proyectoid) => { // (1)

      setVisibleInfo(visibleInfo === proyectoid ? null : proyectoid);
      // "¿visibleInfo (1) es igual a proyectoid (1)?"
      // "¡SÍ! Entonces pongo visibleInfo = null (cierro todo)"
      // "¡NO! Entonces pongo visibleInfo = 1 (abro el proyecto 1)"
  };

  return (
    <section className='seccion-proyectos container-fluid'>
    
        {/* Titulo     */}
        <div className='contenedor-titulo'>
            <h2 className='titulos-global text-center'>Proyectos</h2>
        </div>

        {/* Slide */}
        <div className='contenedor-slide'>
        <Slider {...settings} className='slide'>
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className='slide-proyecto' id="proyectos">
              
              {/* Overlay de info */}
              <div className={`slide ${visibleInfo === proyecto.id ? 'mostrar-overlay' : ''}`}>
              {/* Si visibleInfo es 1 se aplica la clase "Mostrar-Overlay", SI es null no se muestra nada */}
                <picture>
                  {/* Imagen para mobile (pantallas de hasta 550px) */}
                  <source media="(max-width: 550px)" srcSet={proyecto.imagenMobile} />
                  {/* Imagen global */}
                  <img src={proyecto.imagen} alt={proyecto.titulo} className="img-fondo" /> 
                </picture>
              

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
                {/* clickear, llama a toggleOverlay(1)!" */}
                  {visibleInfo === proyecto.id ? "Ocultar" : "Ver info"} {/* Si visibleinfo es 1 -> Ocultar */}
                {/* Ocultar -> Lógica: "¿1 es igual a 1? → SÍ → entonces cierra todo (null)" */}
                </button>
              </div>
            </div>
          ))}
        </Slider>
        </div>
    </section>
  )
}

export default Proyectos


// [ESTADO INICIAL]
// visibleInfo: null
///// Todos los cards: ocultos

// [PRIMER CLICK - Proyecto 1]
// visibleInfo: null → 1
// Proyecto 1: slide mostrar-overlay → Card SUBE
// Botón: "Ver info" → "Ocultar"

// [SEGUNDO CLICK - Mismo Proyecto 1]
// visibleInfo: 1 → null
// Proyecto 1: slide → Card BAJA
// Botón: "Ocultar" → "Ver info"

// [CLICK EN PROYECTO 2 - Cuando 1 está abierto]
// visibleInfo: 1 → 2
// Proyecto 1: slide → Card BAJA
// Proyecto 2: slide mostrar-overlay → Card SUBE
// Botones: Proyecto 1 → "Ver info", Proyecto 2 → "Ocultar"