import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Banner = () => {

   const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id='inicio' className={`container-banner_principal ${!videoLoaded ? 'loading' : ''}`}>
      <video autoPlay muted loop id="background-video" onLoadedData={() => setVideoLoaded(true)}>
        <source src="/imgs/video-banner.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className='content'>
        <h2 className='banner-titulo-dev'>PROGRAMADOR</h2>
        <h2 className='banner-titulo-front-end'>FULL STACK</h2>
      </div>
    </section>
  );
};

export default Banner;