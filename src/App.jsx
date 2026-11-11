import { useTranslation } from 'react-i18next';
import ToggleButton from './components/ToggleButton';
import Sidebar from './components/Sidebar';
import Inicio from './sections/Inicio';
import SobreMi from './sections/SobreMi';
import Proyectos from './sections/Proyectos';
import Contacto from './sections/Contacto';
import Herramientas from './Sections/Herramientas';
import './styles/portafolio.css';

const petals = Array.from({ length: 16 }, (_, index) => ({
  left: `${(index * 37 + 7) % 100}%`,
  delay: `${(index * 1.7) % 14}s`,
  duration: `${12 + (index % 7) * 2}s`,
  size: `${10 + (index % 4) * 4}px`,
}));

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="petal-field" aria-hidden="true">
        {petals.map((petal, index) => (
          <span key={index} className="petal" style={{ '--left': petal.left, '--size': petal.size, '--delay': petal.delay, '--duration': petal.duration, '--sway': `${(index % 2 ? 1 : -1) * (20 + index % 35)}px` }} />
        ))}
      </div>
      <header className="topbar">
        <a className="wordmark" href="#inicio">PORTAFOLIO</a>
        <nav aria-label="Navegación principal">
          <a href="#inicio">{t('sidebar.inicio')}</a>
          <a href="#sobre-mi">{t('sidebar.sobreMi')}</a>
          <a href="#proyectos">{t('sidebar.proyectos')}</a>
          <a href="#herramientas">{t('sidebar.herramientas')}</a>
          <a href="#contacto">{t('sidebar.contacto')}</a>
        </nav>
      </header>
      <ToggleButton />
      <Sidebar />
      <main>
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Herramientas />
        <Contacto />
      </main>
    </>
  );
}

export default App;
