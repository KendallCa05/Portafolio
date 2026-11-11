import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/proyecto1.jpg';
import img2 from '../assets/proyecto2.jpg';
import img3 from '../assets/Proyecto3.jpg';
import img4 from '../assets/proyecto4.jpg';
import ProyectoCard from '../Components/ProyectoCard';
import '../styles/portafolio.css';

const imagenes = { tower: img1, pokemon: img2, multas: img3, beatz: img4 };
const urls = {
  tower: 'https://github.com/ccespedesu/JuegoPatrones',
  pokemon: 'https://github.com/KendallCa05/PokemonGame',
  multas: 'https://github.com/KendallCa05/Proyecto-Multas',
  beatz: 'https://github.com/KendallCa05/ProyectoComponentes',
};
const categoryKeys = {
  tower: 'videojuego',
  pokemon: 'juegoTurnos',
  multas: 'gestionIA',
  beatz: 'interfazMusical',
};

export default function Proyectos() {
  const { t } = useTranslation();
  const proyectos = t('proyectos.proyectos', { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const count = Array.isArray(proyectos) ? proyectos.length : 0;

  if (!count) return null;

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + count) % count);
  };
  const offsets = count === 1 ? [0] : [-1, 0, 1];
  const visibleProjects = offsets.map((offset) => {
    const index = (activeIndex + offset + count) % count;
    return { ...proyectos[index], position: offset, index };
  });

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-heading">
        <div>
          <h2>{t('proyectos.titulo')}</h2>
          <p className="section-intro">{t('proyectos.subtitulo')}</p>
        </div>
        <div className="proyectos-controls">
          <button type="button" onClick={() => move(-1)} aria-label={t('proyectos.anterior')}>
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label={t('proyectos.siguiente')}>
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="proyectos-carrusel" role="region" aria-roledescription="carousel" aria-label={t('proyectos.titulo')}>
        <div className="proyectos-track" aria-live="polite">
          {visibleProjects.map(({ id, titulo, descripcion, position, index }) => (
            <motion.a
              key={`${id}-${position}`}
              href={urls[id] || '#proyectos'}
              target="_blank"
              rel="noopener noreferrer"
              className={`proyecto-enlace ${position === 0 ? 'is-active' : 'is-side'}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: position === 0 ? 1 : 0.76, y: position === 0 ? -7 : 0, scale: position === 0 ? 1.03 : 0.94 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              aria-label={`${titulo}, ${index + 1} ${t('proyectos.de')} ${count}`}
              aria-current={position === 0 ? 'true' : undefined}
            >
              <ProyectoCard
                imgSrc={imagenes[id]}
                titulo={titulo}
                descripcion={descripcion}
                etiqueta={t(`proyectos.categorias.${categoryKeys[id] || 'proyecto'}`)}
                accion={t('proyectos.verProyecto')}
              />
            </motion.a>
          ))}
        </div>
        <div className="proyectos-dots" aria-label={t('proyectos.seleccionarProyecto')}>
          {proyectos.map((proyecto, index) => (
            <button
              type="button"
              key={proyecto.id}
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`${t('proyectos.irA')} ${proyecto.titulo}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
