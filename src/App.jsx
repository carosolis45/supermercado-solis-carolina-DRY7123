import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import './styles/App.css'

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </main>
      <Navbar />
    </div>
  )
}

export default App


