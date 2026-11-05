import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { formatearPrecio } from '../utils/formatters';

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { inventario, agregarAlCarrito } = useInventario();
  const [cantidad, setCantidad] = useState(1);
  const [error, setError] = useState('');

  const producto = inventario.find(p => p.id === id);

  if (!producto) return <div className="text-white text-center mt-10">Producto no encontrado</div>;

  const handleAgregar = () => {
    if (cantidad > producto.stock) {
      setError('No hay suficiente stock disponible.');
      return;
    }
    const exito = agregarAlCarrito(producto, cantidad);
    if (exito) {
      navigate('/carrito');
    } else {
      setError('Error al agregar al carrito.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg text-white flex flex-col md:flex-row gap-8">
      <img 
        src={producto.imagen || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80'} 
        alt={producto.nombre} 
        className="w-full md:w-1/2 h-80 object-cover rounded-lg border border-[#444]" 
      />
      <div className="flex flex-col justify-center flex-1">
        <h2 className="text-3xl font-bold text-[#4caf50] mb-2">{producto.nombre}</h2>
        <p className="text-gray-400 mb-4">Marca: {producto.marca} | Tipo: {producto.tipo}</p>
        <p className="text-2xl font-bold mb-4">{formatearPrecio(producto.precio)}</p>
        <p className="mb-4">Stock disponible: <strong className="text-[#81c784]">{producto.stock}</strong></p>
        
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <div className="flex items-center gap-4 mb-6">
          <label className="font-semibold">Cantidad:</label>
          <input 
            type="number" 
            min="1" 
            max={producto.stock}
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            className="w-20 p-2 rounded bg-[#121212] border border-[#444] text-white text-center"
          />
        </div>

        <button 
          onClick={handleAgregar}
          disabled={producto.stock === 0}
          className="w-full bg-[#2e7d32] hover:bg-[#4caf50] text-white font-bold py-3 rounded transition-colors disabled:opacity-50"
        >
          {producto.stock === 0 ? 'Sin Stock' : 'Agregar al Carrito 🛒'}
        </button>
      </div>
    </div>
  );
}