import '../styles/QuienesSomos.css'

function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <header className="page-header">
        <h1>👨‍👩‍👧‍👦 Quiénes Somos 👨‍👩‍👧‍👦</h1>
      </header>

      <section className="intro">
        <h2>Nuestra Historia</h2>
        <p>
          Somos <strong>Supermercado Inventory</strong>, una cadena comprometida
          con brindar productos de la más alta calidad a precios accesibles.
          Desde nuestra fundación en 2010, hemos crecido hasta contar con
          múltiples sucursales en todo el país.
        </p>
      </section>

      <section className="mision-vision">
        <div className="card">
          <h3>🎯 La Misión</h3>
          <p>
            Ofrecer a nuestros clientes una experiencia de compra cómoda,
            rápida y confiable, con productos  de gran calidad.
          </p>
        </div>
        <div className="card">
          <h3>✨ La Visión</h3>
          <p>
            Ser el supermercado preferido por las familias, reconocido por
            nuestra excelencia en servicio y compromiso con la comunidad.
          </p>
        </div>
        <div className="card">
          <h3>💎 Valores</h3>
          <ul>
            <li>Honestidad y transparencia</li>
            <li>Compromiso con la calidad</li>
            <li>Responsabilidad social</li>
            <li>Innovación constante</li>
          </ul>
        </div>
      </section>

      <section className="equipo">
        <h2>🤝Nuestro Equipo🤝</h2>
        <p>
          Contamos con  colaboradores altamente capacitados y comprometidos con el servicio que
          trabajan cada día para satisfacer las necesidades de nuestros clientes y que tengan una gran experiencia.
        </p>
      </section>
    </div>
  )
}

export default QuienesSomos