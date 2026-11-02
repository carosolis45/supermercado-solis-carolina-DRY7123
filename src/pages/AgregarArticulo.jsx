import { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { useNavigate } from 'react-router-dom';

export default function AgregarArticulo() {
  const { agregarArticulo } = useInventario();
  const navigate = useNavigate();
  
  // Agregamos precio y stock al estado inicial
  const [form, setForm] = useState({ nombre: '', marca: '', tipo: '', precio: '', stock: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convertimos precio y stock a números antes de guardarlos
    agregarArticulo({
      ...form,
      precio: Number(form.precio),
      stock: Number(form.stock)
    });
    navigate('/inventario');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold text-[#4caf50] mb-6">Agregar Artículo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 text-sm font-semibold">Nombre del Producto</label>
          <input required type="text" className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" 
                 onChange={(e) => setForm({...form, nombre: e.target.value})} />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold">Marca</label>
          <input required type="text" className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" 
                 onChange={(e) => setForm({...form, marca: e.target.value})} />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold">Tipo de Producto</label>
          <input required type="text" className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" 
                 onChange={(e) => setForm({...form, tipo: e.target.value})} />
        </div>
        
        {/* NUEVOS CAMPOS: Precio y Stock */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-semibold">Precio (CLP)</label>
            <input required type="number" className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" 
                   onChange={(e) => setForm({...form, precio: e.target.value})} />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm font-semibold">Stock</label>
            <input required type="number" className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" 
                   onChange={(e) => setForm({...form, stock: e.target.value})} />
          </div>
        </div>

        <button type="submit" className="mt-4 bg-[#2e7d32] hover:bg-[#4caf50] text-white font-bold py-2 rounded transition-colors">
          Guardar en Inventario
        </button>
      </form>
    </div>
  );
}