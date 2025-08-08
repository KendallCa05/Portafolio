import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/portafolio.css';

const iconMap = {
  Git: ['fab', 'git-alt'],
  GitHub: ['fab', 'github'],
  React: ['fab', 'react'],
  CSS3: ['fab', 'css3-alt'],
  JavaScript: ['fab', 'js'],
  Java: ['fab', 'java'],
  'C++': ['fas', 'code'],
  Python: ['fab', 'python'],
  'SQL Server': ['fas', 'database'],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Herramientas = () => {
  const { t } = useTranslation();
  const tools = t('herramientas.tools', { returnObjects: true });

  return (
    <section id="herramientas" className="herramientas">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('herramientas.titulo')}
      </motion.h2>

      <motion.div
        className="herramientas-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {tools.map((name) => {
          const [prefix, iconName] = iconMap[name] || ['fas', 'tools'];
          return (
            <motion.div key={name} className="tool-item" variants={itemVariants}>
              <i className={`${prefix} fa-${iconName} tool-icon`} aria-hidden="true" />
              <p>{name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Herramientas;
