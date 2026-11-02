import { useInventario } from '../context/InventarioContext';

export default function ListaInventario() {
  const { inventario } = useInventario();

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold text-[#4caf50] mb-6">Inventario Actual</h2>
      
      {inventario.length === 0 ? (
        <p className="text-gray-400">No hay artículos en el inventario. ¡Agrega uno nuevo!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#444] text-[#aaa]">
                <th className="p-3">ID</th>
                <th className="p-3">Nombre</th>
                <th className="p-3">Marca</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Precio</th>
                <th className="p-3">Stock</th>
              </tr>
            </thead>
            <tbody>
              {inventario.map((item) => (
                <tr key={item.id} className="border-b border-[#333] hover:bg-[#2a2a2a]">
                  <td className="p-3 text-sm text-gray-500">#{item.id.toString().slice(-4)}</td>
                  <td className="p-3">{item.nombre}</td>
                  <td className="p-3">{item.marca}</td>
                  <td className="p-3">
                    <span className="bg-[#1a237e] text-[#90caf9] px-2 py-1 rounded text-xs">{item.tipo}</span>
                  </td>
                  {/* NUEVAS COLUMNAS */}
                  <td className="p-3 text-[#81c784]">{item.precio ? formatearPrecio(item.precio) : 'N/A'}</td>
                  <td className="p-3">{item.stock || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}