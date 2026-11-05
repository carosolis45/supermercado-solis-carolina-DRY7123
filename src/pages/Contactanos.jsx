import { useState } from 'react'

function Contactanos() {
  const [formulario, setFormulario] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formulario.nombre && formulario.email && formulario.mensaje) {
      setEnviado(true)
      setFormulario({ nombre: '', email: '', mensaje: '' })
      setTimeout(() => setEnviado(false), 4000)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-5 pb-24 text-gray-200">
      <header className="bg-gradient-to-br from-[#0d47a1] to-[#1565c0] text-white p-6 rounded-xl mb-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">📞 Hola Contáctanos</h1>
        <p>Estamos aquí para ayudarte</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1e1e1e] border border-[#333] p-6 rounded-xl shadow-md">
          <h2 className="text-[#4caf50] text-xl font-bold mb-6">Información de Contacto</h2>
          
          <div className="flex gap-4 mb-4">
            <span className="text-2xl">📍</span>
            <div>
              <strong className="block text-white">Dirección</strong>
              <p className="text-gray-400 text-sm">Av. Carolina 1234, Ciudad Santiago</p>
            </div>
          </div>
          
          <div className="flex gap-4 mb-4">
            <span className="text-2xl">📱</span>
            <div>
              <strong className="block text-white">Teléfono</strong>
              <p className="text-gray-400 text-sm">+56 9 1234 5678</p>
            </div>
          </div>
          
          <div className="flex gap-4 mb-4">
            <span className="text-2xl">✉️</span>
            <div>
              <strong className="block text-white">Email</strong>
              <p className="text-gray-400 text-sm">contacto@supermercadoinventory.com</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <span className="text-2xl">🕐</span>
            <div>
              <strong className="block text-white">Horario</strong>
              <p className="text-gray-400 text-sm">Lun - Dom: 8:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1e1e1e] border border-[#333] p-6 rounded-xl shadow-md">
          <h2 className="text-[#4caf50] text-xl font-bold mb-6">Envíanos un Mensaje</h2>
          
          {enviado && (
            <div className="bg-[rgba(76,175,80,0.15)] text-[#81c784] p-3 rounded mb-4 text-sm border border-[#2e7d32]">
              ✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Nombre</label>
              <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} required
                     className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input type="email" name="email" value={formulario.email} onChange={handleChange} required
                     className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-1">Mensaje</label>
              <textarea name="mensaje" rows="4" value={formulario.mensaje} onChange={handleChange} required
                        className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white resize-none" />
            </div>
            
            <button type="submit" className="bg-[#2e7d32] hover:bg-[#4caf50] text-white font-bold py-2 rounded transition-colors mt-2">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactanos