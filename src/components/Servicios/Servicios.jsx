import React from 'react';

function Servicios() {
  return (
    <section className="max-w-6xl mx-auto mt-8 animate-fade-in p-6">
      <h2 className="text-4xl font-bold text-orange-600 mb-6 text-center">
        Nuestros Servicios Especializados
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        En DogFacts no solo compartimos curiosidades, ofrecemos servicios diseñados para mejorar la calidad de vida de tu mascota y fortalecer el vínculo que tienen contigo.
      </p>
      
      {/* Sección de Tarjetas detalladas */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Consultoría Canina</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sesiones privadas donde analizamos el temperamento y comportamiento de tu perro. Identificamos áreas de oportunidad y diseñamos un plan de convivencia basado en refuerzo positivo.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Guías de Cuidado</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Acceso a nuestra biblioteca digital con guías sobre nutrición avanzada, prevención de enfermedades estacionales y ejercicios mentales para mantener a tu perro agudo y feliz.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Talleres de Adiestramiento</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Talleres grupales o individuales enfocados en obediencia básica, socialización segura y técnicas de "agility" para que tu perro aprenda mientras se divierte.
          </p>
        </div>
      </div>

      {/* Sección de Tabla (Requerimiento EC0727) */}
      <div className="bg-white p-8 rounded-2xl shadow-xl overflow-x-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Comparativa de Planes</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-orange-100 text-orange-700">
              <th className="p-4 border">Servicio</th>
              <th className="p-4 border">Plan Básico</th>
              <th className="p-4 border">Plan Premium</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-4 border font-semibold">Consultoría</td>
              <td className="p-4 border">1 sesión al mes</td>
              <td className="p-4 border">Sesiones ilimitadas</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-4 border font-semibold">Guías Digitales</td>
              <td className="p-4 border">Acceso básico</td>
              <td className="p-4 border">Acceso total + Videos</td>
            </tr>
            <tr>
              <td className="p-4 border font-semibold">Talleres</td>
              <td className="p-4 border">Descuento 10%</td>
              <td className="p-4 border">Acceso Gratuito</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Servicios;