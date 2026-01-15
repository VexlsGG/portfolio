import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">My Portfolio</NavLink>
        </div>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : ''}>
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/bag" className={({ isActive }) => isActive ? 'active' : ''}>
              My Bag
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
