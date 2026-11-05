import { useState } from 'react'
import { useInventario } from '../context/InventarioContext'
import ProductCard from '../components/ProductCard'
import StatCard from '../components/StatCard' // <-- Importamos

function Home() {
  const { inventario } = useInventario();
  const [filtro, setFiltro] = useState('')

  const productosFiltrados = inventario.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.tipo.toLowerCase().includes(filtro.toLowerCase())
  )

  const totalStock = inventario.reduce((acc, p) => acc + p.stock, 0);
  const totalCategorias = new Set(inventario.map(p => p.tipo)).size;

  return (
    <div className="max-w-5xl mx-auto p-5 pb-24">
      <header className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white p-6 rounded-xl mb-5 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">🛒 Supermercado Inventory 🛒</h1>
        <p className="text-[#a5d6a7]">Sistema de Gestión de Inventario</p>
      </header>

      <section className="mb-6">
        <input
          type="text"
          placeholder="Buscar producto o tipo..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full p-3 bg-[#1e1e1e] text-white border border-[#333] rounded-lg focus:outline-none focus:border-[#4caf50]"
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard title="Productos totales" value={inventario.length} />
        <StatCard title="Unidades en stock" value={totalStock} />
        <StatCard title="Categorías" value={totalCategorias} />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productosFiltrados.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default Home