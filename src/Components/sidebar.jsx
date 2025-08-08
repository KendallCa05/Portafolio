const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li>
          <a href="#inicio" data-tooltip="Inicio">
            <i className="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a href="#sobre-mi" data-tooltip="Sobre Mí">
            <i className="fa-solid fa-user"></i>
          </a>
        </li>
        <li>
          <a href="#herramientas" data-tooltip="Herramientas">
            <i className="fa-solid fa-cogs"></i>
          </a>
        </li>
        <li>
          <a href="#proyectos" data-tooltip="Proyectos">
            <i className="fa-solid fa-diagram-project"></i>
          </a>
        </li>
        <li>
          <a href="#contacto" data-tooltip="Contacto">
            <i className="fa-solid fa-address-card"></i>
          </a>
        </li>
        <li>
      
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
