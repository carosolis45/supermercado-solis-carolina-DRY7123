import { createContext, useContext, useState } from 'react';

// 1. Creamos el contexto
const InventarioContext = createContext();

// 2. Creamos el Proveedor (Provider) que envolverá la app
export function InventarioProvider({ children }) {
  // ESTADO GLOBAL: Lista de artículos
  const [inventario, setInventario] = useState([]);

  // Función para agregar un artículo
  const agregarArticulo = (nuevoArticulo) => {
    // Le agregamos un ID único usando la fecha actual
    setInventario([...inventario, { id: Date.now(), ...nuevoArticulo }]);
  };

  return (
    <InventarioContext.Provider value={{ inventario, agregarArticulo }}>
      {children}
    </InventarioContext.Provider>
  );
}

// 3. Hook personalizado para usar el contexto fácilmente
export function useInventario() {
  const context = useContext(InventarioContext);
  if (!context) {
    throw new Error('useInventario debe usarse dentro de un InventarioProvider');
  }
  return context;
}