import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import img1 from "../assets/proyecto1.jpg";
import img2 from "../assets/proyecto2.jpg";
import img3 from "../assets/proyecto3.jpg";
import img4 from "../assets/proyecto4.jpg";

import ProyectoCard from "../Components/ProyectoCard";
import "../styles/portafolio.css";

// Imágenes por ID
const imagenes = {
  tower: img1,
  pokemon: img2,
  multas: img3,
  beatz: img4,
};

// URLs por ID
const urls = {
  tower: "https://github.com/ccespedesu/JuegoPatrones",
  pokemon: "https://github.com/KendallCa05/PokemonGame",
  multas: "https://github.com/KendallCa05/Proyecto-Multas",
  beatz: "https://github.com/KendallCa05/ProyectoComponentes"
};

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Proyectos() {
  const { t } = useTranslation();
  const proyectos = t('proyectos.proyectos', { returnObjects: true });

  return (
    <section id="proyectos" className="proyectos-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('proyectos.titulo')}
      </motion.h2>

      <motion.div
        className="galeria-proyectos-columna"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {proyectos.map(({ id, titulo, descripcion }) => (
          <motion.a
            key={id}
            href={urls[id]}
            target="_blank"
            rel="noopener noreferrer"
            className="proyecto-enlace"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ProyectoCard
              imgSrc={imagenes[id]}
              titulo={titulo}
              descripcion={descripcion}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
