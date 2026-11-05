import { createContext, useContext, useState } from 'react';
import { productosIniciales } from '../data/productosIniciales';

const InventarioContext = createContext();

export function InventarioProvider({ children }) {
  // 1. Inicializamos con los productos (Sugerencia del profe)
  const [inventario, setInventario] = useState(productosIniciales);
  // 2. Estado para el carrito
  const [carrito, setCarrito] = useState([]);

  const agregarArticulo = (nuevoArticulo) => {
    const articuloConId = { 
      ...nuevoArticulo, 
      id: crypto.randomUUID() // Usamos UUID como fue sugerido
    };
    // Actualización funcional para evitar cierres obsoletos
    setInventario(prev => [...prev, articuloConId]);
  };

  // Función para agregar al carrito (descuenta stock)
  const agregarAlCarrito = (producto, cantidad) => {
    // Verificamos si hay stock suficiente
    if (producto.stock < cantidad) return false;

    // Descontamos del inventario
    setInventario(prev => prev.map(p => 
      p.id === producto.id ? { ...p, stock: p.stock - cantidad } : p
    ));

    // Agregamos al carrito (si ya existe, sumamos la cantidad)
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item);
      }
      return [...prev, { ...producto, cantidad }];
    });
    return true;
  };

  // Función para modificar cantidad desde el carrito
  const modificarCantidadCarrito = (id, nuevaCantidad) => {
    const itemCarrito = carrito.find(item => item.id === id);
    const productoInventario = inventario.find(p => p.id === id);
    
    const diferencia = nuevaCantidad - itemCarrito.cantidad;

    // Si quiere aumentar, verificamos stock
    if (diferencia > 0 && productoInventario.stock < diferencia) return false;

    // Actualizamos inventario (si aumenta, resta stock; si disminuye, devuelve stock)
    setInventario(prev => prev.map(p => 
      p.id === id ? { ...p, stock: p.stock - diferencia } : p
    ));

    // Actualizamos carrito
    setCarrito(prev => prev.map(item => 
      item.id === id ? { ...item, cantidad: nuevaCantidad } : item
    ));
    return true;
  };

  return (
    <InventarioContext.Provider value={{ 
      inventario, 
      agregarArticulo, 
      carrito, 
      agregarAlCarrito, 
      modificarCantidadCarrito 
    }}>
      {children}
    </InventarioContext.Provider>
  );
}

export function useInventario() {
  const context = useContext(InventarioContext);
  if (!context) throw new Error('useInventario debe usarse dentro de un InventarioProvider');
  return context;
}