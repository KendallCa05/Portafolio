import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import assets from '../assets/LogoClaroSinFondo.png';

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
        <motion.img
          src={assets}
          alt={t('inicio.altLogo')}
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
          <h1>{t('inicio.holaNombre')}</h1>
          <p>{t('inicio.descripcion')}</p>
          <motion.a
            href="/Portafolio/CV.pdf"
            download
            className="cv-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {t('inicio.cvButton')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Inicio;
