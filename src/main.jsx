import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { InventarioProvider } from './context/InventarioContext' // <-- Importamos
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <InventarioProvider> {/* <-- Envolvemos la App */}
        <App />
      </InventarioProvider>
    </BrowserRouter>
  </React.StrictMode>,
)