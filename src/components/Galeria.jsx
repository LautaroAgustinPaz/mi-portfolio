import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal';

const Galeria = () => {
  const [categoria, setCategoria] = useState("tradicional");

  const imagenes = {
    tradicional: [1, 2, 3, 4, 5, 6].map(num => `/imgs/tradicional/imagen-${num}.webp`),
    realismo: [1, 2, 3, 4, 5, 6].map(num => `/imgs/realismo/imagen-${num}.webp`),
    geométrico: [1, 2, 3, 4, 5, 6].map(num => `/imgs/geometrico/imagen-${num}.webp`),
    lettering: [1, 2, 3, 4, 5, 6].map(num => `/imgs/lettering/imagen-${num}.webp`),
  };

  useEffect (() => {

    ScrollReveal().reveal('.galeria-title', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.contenedor-botones-grupo', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 400,
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.filas', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 700,
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.contenedor-elegir-categoria', {
      origin: 'left',
      distance: '100px',
      duration: 800,
      delay: 100,
      easing: 'ease-in-out',
      reset: false
    });
    
  }, []);

  return (
    <section id="galeria" className='contenedor-galeria'>
      <h2 className="text-center galeria-title">Galeria</h2>
      
      {/* Botones Grupo */}
      <div className="btn-group contenedor-botones-grupo" role="group" aria-label="Basic radio toggle button group">
        {["tradicional", "realismo", "geométrico", "lettering"].map((tipo, index) => (
          <React.Fragment key={tipo}>
            <input
              onClick={() => setCategoria(tipo)}
              type="radio"
              className="btn-check"
              name="btnradio"
              id={`btnradio${index + 1}`}
              autoComplete="off"
              defaultChecked={categoria === tipo}
            />
            <label 
              className={`btn btn-${index + 1} ${categoria === tipo ? "activo" : ""}`} 
              htmlFor={`btnradio${index + 1}`}
            >
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </label>
          </React.Fragment>
        ))}
      </div>
      
      {/* Galería de imágenes */}
      <div className="container-fluid contenedor-galeria">
        <div className="row filas">
          {imagenes[categoria].map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 galeria-cards">
              <img src={img} alt={`Imagen ${index + 1}`} className="img-fluid mb-4 img-card" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Botón para volver a elegir categoría */}
      <div className='container-fluid contenedor-elegir-categoria'>
        <a href="#galeria" className="btn btn-elegir-categoria">Elegir otra categoria</a>
      </div>
    </section>
  )
}

export default Galeria;
