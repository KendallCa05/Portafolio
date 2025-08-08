import ToggleButton from './components/ToggleButton';
import Sidebar from './components/Sidebar';
import Inicio from './sections/Inicio';
import SobreMi from './sections/SobreMi';
import Proyectos from './sections/Proyectos';
import Contacto from './sections/Contacto';
import Herramientas from './Sections/Herramientas';
import './styles/portafolio.css';

function App() {
  return (
    <>
      <ToggleButton />
      <Sidebar />
      <main>
        <Inicio />
        <SobreMi />
        <Herramientas />
        <Proyectos />
        <Contacto />
      </main>
    </>
  );
}

export default App;
