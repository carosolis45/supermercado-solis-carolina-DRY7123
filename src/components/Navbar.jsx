import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="bottom-nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        end
      >
        <span className="nav-icon">🏠</span>
        <span>Inicio</span>
      </NavLink>

      <NavLink 
        to="/quienes-somos" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon">👨‍👩‍👧‍👦</span>
        <span>Quiénes Somos</span>
      </NavLink>

      <NavLink 
        to="/contactanos" 
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon">📞</span>
        <span>Contáctanos</span>
      </NavLink>
    </nav>
  )
}

export default Navbar