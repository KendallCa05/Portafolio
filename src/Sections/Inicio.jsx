import { motion } from 'framer-motion';
import assets from '../assets/LogoClaroSinFondo.png';

const Inicio = () => (
  <section id="inicio" className="inicio-container">
    <motion.div
      className="inicio-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }} // Solo se anima una vez, cuando el 40% del elemento está visible
    >
      <motion.img
        src={assets}
        alt="Logo de kiwi"
        className="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
      <motion.div
        className="texto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h1>Hola, mi nombre es Kendall</h1>
        <p>
          Desarrollador de Software Backend, enfocado en la resolución de problemas y la adaptación a nuevas tecnologías...
        </p>
        <motion.a
          href="/CV.pdf"
          download
          className="cv-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Descargar CV
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default Inicio;