import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SobreMi = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <motion.div
        className="sobre-mi-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2>{t('sobreMi.titulo')}</h2>
        <p>{t('sobreMi.descripcion')}</p>
      </motion.div>
    </section>
  );
};

export default SobreMi;
