import { useInventario } from '../context/InventarioContext';
import { formatearPrecio } from '../utils/formatters';

export default function Carrito() {
  const { carrito, modificarCantidadCarrito } = useInventario();

  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  if (carrito.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl text-center text-gray-400 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Tu carrito está vacío 🛒</h2>
        <p>Ve al catálogo para agregar productos.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold text-[#4caf50] mb-6">Mi Carrito</h2>
      
      <div className="flex flex-col gap-4">
        {carrito.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-[#121212] p-4 rounded-lg border border-[#333]">
            <div className="flex items-center gap-4">
              <img 
                src={item.imagen || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80'} 
                alt={item.nombre} 
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-bold">{item.nombre}</h3>
                <p className="text-sm text-gray-400">{formatearPrecio(item.precio)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => modificarCantidadCarrito(item.id, item.cantidad - 1)}
                disabled={item.cantidad <= 1}
                className="bg-[#333] hover:bg-[#555] w-8 h-8 rounded disabled:opacity-50"
              >-</button>
              <span className="w-8 text-center">{item.cantidad}</span>
              <button 
                onClick={() => modificarCantidadCarrito(item.id, item.cantidad + 1)}
                className="bg-[#333] hover:bg-[#555] w-8 h-8 rounded"
              >+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-[#333] pt-4 flex justify-between items-center">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-2xl font-bold text-[#4caf50]">{formatearPrecio(total)}</span>
      </div>
    </div>
  );
}