import { motion } from 'framer-motion';
import img1 from "../assets/proyecto1.jpg";
import img2 from "../assets/proyecto2.jpg";
import img3 from "../assets/proyecto3.jpg";
import img4 from "../assets/proyecto4.jpg";

import ProyectoCard from "../Components/ProyectoCard";
import "../styles/portafolio.css";

const proyectos = [
  {
    imgSrc: img1,
    titulo: "Tower defense",
    descripcion: "Videojuego tipo tower defense hecho en godot",
    url: "https://github.com/ccespedesu/JuegoPatrones"
  },
  {
    imgSrc: img2,
    titulo: "Pokemon Duel",
    descripcion: "Juego de pokemon por turnos.",
    url: "https://github.com/KendallCa05/PokemonGame"
  },
  {
    imgSrc: img3,
    titulo: "Sistema de gestión de multas",
    descripcion: "Aplicación para la gestión de multas utilizando IA.",
    url: "https://github.com/KendallCa05/Proyecto-Multas"
  },
  {
    imgSrc: img4,
    titulo: "Beatz",
    descripcion: "Interfaz gráfica para una app de música.",
    url: "https://github.com/KendallCa05/ProyectoComponentes"
  }
];

// Variants para animación escalonada
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
  return (
    <section id="proyectos" className="proyectos-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proyectos Destacados
      </motion.h2>

      <motion.div
        className="galeria-proyectos-columna"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {proyectos.map(({ titulo, imgSrc, descripcion, url }) => (
          <motion.a
            key={titulo}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="proyecto-enlace"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ProyectoCard
              imgSrc={imgSrc}
              titulo={titulo}
              descripcion={descripcion}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
