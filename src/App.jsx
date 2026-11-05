import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import AgregarArticulo from './pages/AgregarArticulo'
import ListaInventario from './pages/ListaInventario'
import ProductoDetalle from './pages/ProductoDetalle'
import Carrito from './pages/Carrito'

function App() {
  return (
    <div className="app-container min-h-screen bg-[#121212]">
      <main className="main-content pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/agregar" element={<AgregarArticulo />} />
          <Route path="/inventario" element={<ListaInventario />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
      <Navbar />
    </div>
  )
}

export default App
