import { motion } from 'framer-motion';

const SobreMi = () => (
  <section id="sobre-mi" className="sobre-mi-section">
    <motion.div
      className="sobre-mi-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2>Sobre Mí</h2>
      <p>
        Soy Kendall Cordero, un profesional apasionado por el desarrollo de Software, con formación técnica en Electrónica y Telecomunicaciones.  
        Me apasiona aprender y enfrentar nuevos retos.  
        Tengo experiencia reparando equipos electrónicos, lo que me ha enseñado a ser paciente y resolver problemas con creatividad.  
        Me adapto fácilmente a nuevas tecnologías y situaciones, y siempre busco seguir creciendo tanto profesional como personalmente.
      </p>
    </motion.div>
  </section>
);

export default SobreMi;
