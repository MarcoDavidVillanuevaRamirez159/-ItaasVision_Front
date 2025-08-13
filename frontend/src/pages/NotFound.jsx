import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>404 - No encontrado</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;
