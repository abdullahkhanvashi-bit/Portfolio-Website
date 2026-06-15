import { FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">

        <a
          className="navbar-brand"
          href="#"
        >
          Abdullah Khan
        </a>

        <div>
          <a
            href="#about"
            className="nav-link text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="nav-link text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="nav-link text-white"
          >
            Contact
          </a>
        </div>

        <FaMoon />
      </div>
    </nav>
  );
}

export default Navbar;