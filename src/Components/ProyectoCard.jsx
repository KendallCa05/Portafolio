import "../styles/portafolio.css";

export default function ProyectoCard({ imgSrc, titulo, descripcion }) {
  return (
    <div className="proyecto-card">
      <img src={imgSrc} alt={titulo} />
      <div className="proyecto-card-text">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
