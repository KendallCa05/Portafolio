import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import kiwiLogo from '../assets/LogoClaroSinFondo.png';

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="inicio-container">
      <motion.div
        className="inicio-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={kiwiLogo} alt={t('inicio.altLogo')} className="logo" />
        </motion.div>
        <motion.div
          className="texto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="hero-greeting">{t('inicio.saludo')}</p>
          <h1>{t('inicio.nombre')} <span>{t('inicio.apellido')}</span></h1>
          <p>{t('inicio.descripcion')}</p>
          <div className="hero-actions">
            <motion.a href="/Portafolio/CV.pdf" download className="cv-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <i className="fa-solid fa-download" aria-hidden="true" /> {t('inicio.cvButton')}
            </motion.a>
            <a href="#contacto" className="contact-button"><i className="fa-regular fa-envelope" aria-hidden="true" /> {t('sidebar.contacto')}</a>
          </div>
          <div className="hero-socials" aria-label="Redes sociales">
            <a href="https://github.com/KendallCa05" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/kendallca" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
            <a href="https://wa.me/86312971" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Inicio;
