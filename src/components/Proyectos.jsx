import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const proyectos = [{
  id: 1,
  titulo: 'Portfolio Tatuador',
  imagen: "imgs/proyectos/portfolio-tatuador.jpeg",
  parrafo: "",
  link: "https://landing-page-tatto-portfolio.vercel.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/landingPage-TattoPortfolio"
},
{
  id: 2,
  titulo: 'Portfolio Tatuador',
  imagen: "imgs/proyectos/portfolio-tatuador.jpeg",
  parrafo: "",
  link: "https://landing-page-tatto-portfolio.vercel.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/landingPage-TattoPortfolio"
},
{
  id: 3,
  titulo: 'Portfolio Tatuador',
  imagen: "imgs/proyectos/portfolio-tatuador.jpeg",
  parrafo: "",
  link: "https://landing-page-tatto-portfolio.vercel.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/landingPage-TattoPortfolio"
},
{
  id: 4,
  titulo: 'Portfolio Tatuador',
  imagen: "imgs/proyectos/portfolio-tatuador.jpeg",
  parrafo: "",
  link: "https://landing-page-tatto-portfolio.vercel.app/",
  repositorio: "https://github.com/LautaroAgustinPaz/landingPage-TattoPortfolio"
},
]

const Proyectos = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="proyectos" className='seccion-proyectos container-fluid'>
    
        {/* Titulo     */}
        <div className='contenedor-titulo'>
            <h2 className='habilidades-titulo text-center'>Proyectos</h2>
        </div>

        {/* Slide */}
        <Slider {...settings}>
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className='slide-proyecto'>
              <div className='slide'>

              </div>
              {/* <img src={proyecto.imagen} alt={proyecto.titulo} /> Esto vamos a transformarlo en un div que contenga una imagen*/}
              {/* <h3>{proyecto.titulo}</h3>
              <p>{proyecto.parrafo}</p>
              <a href={proyecto.link} target='_blank'></a>
              <a href={proyecto.repositorio} target='_blank'></a> */}
            </div>
          ))}
        </Slider>

    </section>
  )
}

export default Proyectos
