import { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { formatearPrecio } from '../utils/formatters';

export default function ListaInventario() {
  const { inventario } = useInventario();
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');

  // Obtenemos las categorías únicas
  const categorias = ['Todas', ...new Set(inventario.map(item => item.tipo))];

  // Filtramos el inventario
  const inventarioFiltrado = categoriaFiltro === 'Todas' 
    ? inventario 
    : inventario.filter(item => item.tipo === categoriaFiltro);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg text-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-[#4caf50]">Inventario Actual</h2>
        
        {/* FILTRO POR CATEGORÍA */}
        <select 
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="p-2 bg-[#121212] border border-[#444] rounded text-white focus:outline-none focus:border-[#4caf50]"
        >
          {categorias.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      {inventarioFiltrado.length === 0 ? (
        <p className="text-gray-400">No hay artículos en esta categoría.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#444] text-[#aaa]">
                <th className="p-3">Nombre</th>
                <th className="p-3">Marca</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Precio</th>
                <th className="p-3">Stock</th>
              </tr>
            </thead>
            <tbody>
              {inventarioFiltrado.map((item) => (
                <tr key={item.id} className="border-b border-[#333] hover:bg-[#2a2a2a]">
                  <td className="p-3">{item.nombre}</td>
                  <td className="p-3">{item.marca || 'N/A'}</td>
                  <td className="p-3">
                    <span className="bg-[#1a237e] text-[#90caf9] px-2 py-1 rounded text-xs">{item.tipo}</span>
                  </td>
                  <td className="p-3 text-[#81c784]">{formatearPrecio(item.precio)}</td>
                  <td className="p-3">{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}