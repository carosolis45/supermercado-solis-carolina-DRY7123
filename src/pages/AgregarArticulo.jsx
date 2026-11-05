import { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField'; // <-- Importamos

export default function AgregarArticulo() {
  const { agregarArticulo } = useInventario();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', marca: '', tipo: '', precio: '', stock: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        
        <InputField label="Nombre del Producto" type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        <InputField label="Marca" type="text" name="marca" value={form.marca} onChange={handleChange} />
        <InputField label="Tipo de Producto" type="text" name="tipo" value={form.tipo} onChange={handleChange} />
        
        <div className="flex gap-4">
          <div className="flex-1">
            <InputField label="Precio (CLP)" type="number" name="precio" value={form.precio} onChange={handleChange} min="1" />
          </div>
          <div className="flex-1">
            <InputField label="Stock" type="number" name="stock" value={form.stock} onChange={handleChange} min="1" />
          </div>
        </div>

        <button type="submit" className="mt-4 bg-[#2e7d32] hover:bg-[#4caf50] text-white font-bold py-2 rounded transition-colors">
          Guardar en Inventario
        </button>
      </form>
    </div>
  );
}