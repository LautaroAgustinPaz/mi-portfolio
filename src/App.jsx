import Banner from './components/Banner'
import Navbar from './components/Navbar'
import SobreMi from './components/SobreMi'
import Footer from './components/Footer'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <SobreMi></SobreMi>
      <Habilidades></Habilidades>
      <Proyectos></Proyectos>
      <Footer></Footer>
    </>
  )
}

export default App
