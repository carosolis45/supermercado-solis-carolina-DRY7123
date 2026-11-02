import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
// IMPORTAMOS LAS NUEVAS PÁGINAS
import AgregarArticulo from './pages/AgregarArticulo'
import ListaInventario from './pages/ListaInventario'
import './styles/App.css'

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          
          {/* NUEVAS RUTAS */}
          <Route path="/agregar" element={<AgregarArticulo />} />
          <Route path="/inventario" element={<ListaInventario />} />
        </Routes>
      </main>
      <Navbar />
    </div>
  )
}

export default App


