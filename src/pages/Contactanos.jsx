import { useState } from 'react'
import '../styles/Contactanos.css'

function Contactanos() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
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
    <div className="contactanos">
      <header className="page-header">
        <h1>📞 Contáctanos</h1>
        <p>Estamos aquí para ayudarte</p>
      </header>

      <section className="contacto-grid">
        <div className="info-contacto">
          <h2>Información de Contacto</h2>
          <div className="info-item">
            <span>📍</span>
            <div>
              <strong>Dirección</strong>
              <p>Av. Solis 1282, Ciudad</p>
            </div>
          </div>
          <div className="info-item">
            <span>📱</span>
            <div>
              <strong>Teléfono</strong>
              <p>+56 9 1111 2222</p>
            </div>
          </div>
          <div className="info-item">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>contacto@supermercadoinventory.com</p>
            </div>
          </div>
          <div className="info-item">
            <span>🕐</span>
            <div>
              <strong>Horario</strong>
              <p>Lun - Sab: 9:00 - 19:00</p>
            </div>
          </div>
        </div>

        <div className="formulario-contacto">
          <h2>Envíanos un Mensaje</h2>
          {enviado && (
            <div className="mensaje-exito">
              ✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                rows="5"
                value={formulario.mensaje}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contactanos