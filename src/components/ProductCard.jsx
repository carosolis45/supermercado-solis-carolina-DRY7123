import { Link } from 'react-router-dom';
import { formatearPrecio } from '../utils/formatters';

export default function ProductCard({ producto }) {
  // Si no tiene imagen (productos nuevos), usamos una por defecto
  const imagenUrl = producto.imagen || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80';

  return (
    <div className="bg-[#1e1e1e] p-4 rounded-xl border border-[#333] hover:-translate-y-1 hover:border-[#4caf50] transition-all shadow-md flex flex-col justify-between">
      <div>
        <img src={imagenUrl} alt={producto.nombre} className="w-full h-40 object-cover rounded-lg mb-3 border border-[#444]" />
        <h3 className="text-white font-bold text-lg">{producto.nombre}</h3>
        <p className="text-gray-400 text-sm mb-2">{producto.marca}</p>
        <span className="inline-block bg-[#1a237e] text-[#90caf9] text-xs px-2 py-1 rounded mb-2">
          {producto.tipo}
        </span>
        <div className="text-gray-400 text-sm mb-3">
          <p>Stock: <strong className="text-white">{producto.stock}</strong></p>
          <p>Precio: <strong className="text-white">{formatearPrecio(producto.precio)}</strong></p>
        </div>
      </div>
      
      <div className="mt-2">
        <Link 
          to={`/producto/${producto.id}`} 
          className="block text-center w-full bg-[#2e7d32] hover:bg-[#4caf50] text-white font-bold py-2 rounded transition-colors"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}