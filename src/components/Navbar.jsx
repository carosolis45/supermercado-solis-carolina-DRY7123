import { NavLink } from 'react-router-dom'

function Navbar() {
  // Usamos un arreglo para evitar repetir código (Sugerencia del profesor)
  const navItems = [
    { path: '/', label: 'Inicio', icon: '🏠' },
    { path: '/inventario', label: 'Inventario', icon: '📦' },
    { path: '/agregar', label: 'Agregar', icon: '➕' },
    { path: '/quienes-somos', label: 'Quiénes Somos', icon: '👨‍👩‍👧‍👦' }, 
    { path: '/contactanos', label: 'Contáctanos', icon: '📞' },
  ]

  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-[#1e1e1e] border-t border-[#333] py-2 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => (
        <NavLink 
          key={item.path}
          to={item.path} 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 px-3 py-1 rounded-lg text-[11px] transition-all ${
              isActive 
                ? 'text-[#4caf50] bg-[rgba(76,175,80,0.1)] font-bold' 
                : 'text-gray-400 hover:text-white'
            }`
          }
          end={item.path === '/'}
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar