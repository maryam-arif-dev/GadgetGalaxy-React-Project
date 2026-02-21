import { NavLink } from "react-router-dom";
export default function NavBar() {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active fw-semibold" : " text-secondary");
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          GadgetGalaxy
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className={linkClass}>
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
