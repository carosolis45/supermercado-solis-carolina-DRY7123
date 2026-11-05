import { NavLink } from 'react-router-dom'
import { useInventario } from '../context/InventarioContext' // <-- Para ver cuántos items hay

function Navbar() {
  const { carrito } = useInventario();
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const navItems = [
    { path: '/', label: 'Inicio', icon: '🏠' },
    { path: '/inventario', label: 'Inventario', icon: '📦' },
    { path: '/agregar', label: 'Agregar', icon: '➕' },
    { path: '/carrito', label: 'Carrito', icon: '🛒', badge: totalItems }, // <-- NUEVO
    { path: '/quienes-somos', label: 'Nosotros', icon: '👨‍👩‍👧‍👦' },
    { path: '/contactanos', label: 'Contacto', icon: '📞' },
  ]

  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-[#1e1e1e] border-t border-[#333] py-2 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => (
        <NavLink 
          key={item.path}
          to={item.path} 
          className={({ isActive }) => 
            `relative flex flex-col items-center gap-1 px-2 py-1 rounded-lg text-[10px] sm:text-[11px] transition-all ${
              isActive ? 'text-[#4caf50] bg-[rgba(76,175,80,0.1)] font-bold' : 'text-gray-400 hover:text-white'
            }`
          }
          end={item.path === '/'}
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
          {item.badge > 0 && (
            <span className="absolute top-0 right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {item.badge}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar