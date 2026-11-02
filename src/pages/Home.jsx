import { useState } from 'react'
import { productosIniciales } from '../data/productosIniciales'
import { useInventario } from '../context/InventarioContext' // <-- 1. Importamos el estado global

function Home() {
  // 2. Traemos el inventario global y lo unimos con los productos iniciales
  const { inventario } = useInventario();
  const productos = [...productosIniciales, ...inventario];
  
  const [filtro, setFiltro] = useState('')

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.categoria?.toLowerCase().includes(filtro.toLowerCase()) || // Usamos ? por si el producto nuevo no tiene categoría
    p.tipo?.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div className="max-w-5xl mx-auto p-5 pb-24">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white p-6 rounded-xl mb-5 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">🛒 Supermercado Inventory 🛒</h1>
        <p className="text-[#a5d6a7]">Sistema de Gestión de Inventario</p>
      </header>

      {/* Buscador */}
      <section className="mb-6">
        <input
          type="text"
          placeholder="Buscar producto o categoría..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full p-3 bg-[#1e1e1e] text-white border border-[#333] rounded-lg focus:outline-none focus:border-[#4caf50]"
        />
      </section>

      {/* Estadísticas */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1e1e1e] p-4 rounded-xl text-center border border-[#333] shadow-md">
          <h3 className="text-3xl font-bold text-[#4caf50]">{productos.length}</h3>
          <p className="text-gray-400 text-sm">Productos totales</p>
        </div>
        <div className="bg-[#1e1e1e] p-4 rounded-xl text-center border border-[#333] shadow-md">
          <h3 className="text-3xl font-bold text-[#4caf50]">{productos.reduce((acc, p) => acc + (p.stock || 0), 0)}</h3>
          <p className="text-gray-400 text-sm">Unidades en stock</p>
        </div>
        <div className="bg-[#1e1e1e] p-4 rounded-xl text-center border border-[#333] shadow-md">
          <h3 className="text-3xl font-bold text-[#4caf50]">{new Set(productos.map(p => p.categoria || p.tipo)).size}</h3>
          <p className="text-gray-400 text-sm">Categorías</p>
        </div>
      </section>

      {/* Listado de Productos */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Listado de Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="bg-[#1e1e1e] p-4 rounded-xl border border-[#333] hover:-translate-y-1 hover:border-[#4caf50] transition-all shadow-md flex flex-col justify-between">
              
              <div>
                {/* 3. Imagen por defecto si el producto no tiene una */}
                <img 
                  src={producto.imagen || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80'} 
                  alt={producto.nombre} 
                  className="w-full h-40 object-cover rounded-lg mb-3 border border-[#444]" 
                />
                
                <h3 className="text-white font-bold text-lg">{producto.nombre}</h3>
                <span className="inline-block bg-[#1a237e] text-[#90caf9] text-xs px-2 py-1 rounded mb-2 mt-1">
                  {producto.categoria || producto.tipo || 'General'}
                </span>
                
                <div className="text-gray-400 text-sm mb-3">
                  <p>Stock: <strong className="text-white">{producto.stock || 'N/A'}</strong></p>
                  <p>Precio: <strong className="text-white">{producto.precio ? formatearPrecio(producto.precio) : 'No asignado'}</strong></p>
                </div>
              </div>

              <span className={`text-xs px-2 py-1 rounded font-semibold text-center ${(!producto.stock || producto.stock < 50) ? 'bg-[rgba(255,152,0,0.15)] text-[#ffb74d]' : 'bg-[rgba(76,175,80,0.15)] text-[#81c784]'}`}>
                {(!producto.stock || producto.stock < 50) ? '⚠️ Stock bajo' : '✅ Disponible'}
              </span>

            </div>
          ))}
        </div>
        {productosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No se encontraron productos</p>
        )}
      </section>
    </div>
  )
}

export default Home