import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <Link to="/" className="navbar__brand">
          Dashboard Camera
        </Link>
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
