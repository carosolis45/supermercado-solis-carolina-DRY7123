function QuienesSomos() {
  return (
    <div className="max-w-4xl mx-auto p-5 pb-24 text-gray-200">
      <header className="bg-gradient-to-br from-[#0d47a1] to-[#1565c0] text-white p-6 rounded-xl mb-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">👨‍👩‍👧‍👦 Quiénes Somos</h1>
      </header>

      <section className="bg-[#1e1e1e] border border-[#333] p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-[#4caf50] text-2xl font-bold mb-4">Nuestra Historia</h2>
        <p className="leading-relaxed">
          Somos <strong>Supermercado Inventory</strong>, una cadena comprometida
          con brindar productos de la más alta calidad a precios accesibles.
          Desde nuestra fundación en 2019, hemos crecido hasta contar con
          múltiples sucursales en diferentes partes del país.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#1e1e1e] border border-[#333] p-6 rounded-xl shadow-md">
          <h3 className="text-[#4caf50] text-xl font-bold mb-3">🎯 Misión</h3>
          <p className="text-sm">
            Ofrecer a nuestros clientes una experiencia de compra cómoda,
            rápida y confiable, con productos frescos y de calidad.
          </p>
        </div>
        <div className="bg-[#1e1e1e] border border-[#333] p-6 rounded-xl shadow-md">
          <h3 className="text-[#4caf50] text-xl font-bold mb-3">🔭 Visión</h3>
          <p className="text-sm">
            Ser el supermercado preferido por las familias, reconocido por
            nuestra excelencia en servicio y compromiso con la comunidad.
          </p>
        </div>
        <div className="bg-[#1e1e1e] border border-[#333] p-6 rounded-xl shadow-md">
          <h3 className="text-[#4caf50] text-xl font-bold mb-3">💎 Valores</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Honestidad y transparencia</li>
            <li>Compromiso con la calidad</li>
            <li>Responsabilidad social</li>
            <li>Innovación constante</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#1e1e1e] border border-[#333] p-6 rounded-xl shadow-md">
        <h2 className="text-[#4caf50] text-2xl font-bold mb-4">🤝 Nuestro Equipo</h2>
        <p className="leading-relaxed">
          Contamos con  100 colaboradores altamente capacitados que
          trabajan cada día para satisfacer las necesidades de nuestros clientes y otorgar el mejor servicio y la mejor experiencia.
        </p>
      </section>
    </div>
  )
}

export default QuienesSomos