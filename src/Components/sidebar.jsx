import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = (e) => {
    e.preventDefault(); // evita que el <a> recargue la página
    const nuevoIdioma = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nuevoIdioma);
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="#inicio" data-tooltip={t("sidebar.inicio")}>
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          <li>
            <a href="#sobre-mi" data-tooltip={t("sidebar.sobreMi")}>
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
          <li>
            <a href="#herramientas" data-tooltip={t("sidebar.herramientas")}>
              <i className="fa-solid fa-cogs"></i>
            </a>
          </li>
          <li>
            <a href="#proyectos" data-tooltip={t("sidebar.proyectos")}>
              <i className="fa-solid fa-diagram-project"></i>
            </a>
          </li>
          <li>
            <a href="#contacto" data-tooltip={t("sidebar.contacto")}>
              <i className="fa-solid fa-address-card"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={toggleLanguage}
              data-tooltip={t("sidebar.cambiarIdioma")}
              aria-label={t("sidebar.cambiarIdioma")}
            >
              <i className="fa-solid fa-language"></i>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
