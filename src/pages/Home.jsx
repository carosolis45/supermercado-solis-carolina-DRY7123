import { useState } from 'react'
import '../styles/Home.css'

function Home() {
  const [productos] = useState([
    { 
      id: 1, 
      nombre: 'Arroz 1kg', 
      categoria: 'Abarrotes', 
      stock: 150, 
      precio: 1890, 
      imagen: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80' 
    },
    { 
      id: 2, 
      nombre: 'Leche entera 1L', 
      categoria: 'Lácteos', 
      stock: 80, 
      precio: 1100, 
      imagen: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80' 
    },
    { 
      id: 3, 
      nombre: 'Pan integral', 
      categoria: 'Panadería', 
      stock: 45, 
      precio: 2500, 
      imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80' 
    },
    { 
      id: 4, 
      nombre: 'Manzanas 1kg', 
      categoria: 'Frutas', 
      stock: 120, 
      precio: 1200, 
      imagen: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&q=80' 
    },
    { 
      id: 5, 
      nombre: 'Detergente 1L', 
      categoria: 'Limpieza', 
      stock: 60, 
      precio: 6990, 
      imagen: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&q=80' 
    },
    { 
      id: 6, 
      nombre: 'Pollo entero kg', 
      categoria: 'Carnes', 
      stock: 30, 
      precio: 2990, 
      imagen: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&q=80' 
    }
  ])

  const [filtro, setFiltro] = useState('')

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.categoria.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div className="home">
      <header className="home-header">
        <h1>🛒 Supermercado Inventory 🛒</h1>
        <p>Sistema de Gestión de Inventario</p>
      </header>

      <section className="search-section">
        <input
          type="text"
          placeholder="Buscar producto o categoría..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="search-input"
        />
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>{productos.length}</h3>
          <p>Productos totales</p>
        </div>
        <div className="stat-card">
          <h3>{productos.reduce((acc, p) => acc + p.stock, 0)}</h3>
          <p>Unidades en stock</p>
        </div>
        <div className="stat-card">
          <h3>{new Set(productos.map(p => p.categoria)).size}</h3>
          <p>Categorías</p>
        </div>
      </section>

      <section className="productos">
        <h2>Listado de Productos</h2>
        <div className="productos-grid">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="producto-card">
              
              {/* AQUÍ ESTÁ LA MAGIA: La etiqueta de la imagen */}
              <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
              
              <h3>{producto.nombre}</h3>
              <span className="categoria">{producto.categoria}</span>
              <div className="producto-info">
                <p>Stock: <strong>{producto.stock}</strong></p>
                <p>Precio: <strong>${producto.precio.toFixed(2)}</strong></p>
              </div>
              <span className={`status ${producto.stock < 50 ? 'bajo' : 'ok'}`}>
                {producto.stock < 50 ? '⚠️ Stock bajo' : '✅ Disponible'}
              </span>
            </div>
          ))}
        </div>
        {productosFiltrados.length === 0 && (
          <p className="no-results">No se encontraron productos</p>
        )}
      </section>
    </div>
  )
}

export default Home