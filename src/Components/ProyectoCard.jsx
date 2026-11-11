import "../styles/portafolio.css";

export default function ProyectoCard({ imgSrc, titulo, descripcion, etiqueta, accion }) {
  return (
    <div className="proyecto-card">
      <img src={imgSrc} alt={titulo} />
      <div className="proyecto-card-text">
        <span className="proyecto-etiqueta">{etiqueta}</span>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <span className="proyecto-card-accion">{accion}<i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></span>
      </div>
    </div>
  );
}
