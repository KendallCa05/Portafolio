import { motion } from 'framer-motion';
import '../styles/portafolio.css';

const tools = [
  { name: 'Git',         icon: ['fab', 'git-alt'] },
  { name: 'GitHub',      icon: ['fab', 'github'] },
  { name: 'React',       icon: ['fab', 'react'] },
  { name: 'CSS3',        icon: ['fab', 'css3-alt'] },
  { name: 'JavaScript',  icon: ['fab', 'js'] },
  { name: 'Java',        icon: ['fab', 'java'] },
  { name: 'C++',         icon: ['fas', 'code'] },
  { name: 'Python',      icon: ['fab', 'python'] },
  { name: 'SQL Server',  icon: ['fas', 'database'] },
];

// Variants para animación escalonada
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

const Herramientas = () => (
  <section id="herramientas" className="herramientas">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Herramientas
    </motion.h2>

    <motion.div
      className="herramientas-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {tools.map(({ name, icon }) => {
        const [prefix, iconName] = icon;
        return (
          <motion.div key={name} className="tool-item" variants={itemVariants}>
            <i
              className={`${prefix} fa-${iconName} tool-icon`}
              aria-hidden="true"
            />
            <p>{name}</p>
          </motion.div>
        );
      })}
    </motion.div>
  </section>
);

export default Herramientas;
