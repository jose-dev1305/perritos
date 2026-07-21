import React from 'react';

function MisionVision() {
  return (
    <section className="max-w-6xl mx-auto mt-12 p-6 mb-12">
      
      {/* ENCABEZADO */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Nuestro Propósito en DogFacts 🐕
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Más que un servicio, somos una comunidad apasionada por mejorar la calidad de vida de los perritos y sus familias.
        </p>
      </div>

      {/* CONTENEDOR DE MISIÓN Y VISIÓN (TARJETAS) */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        
        {/* Tarjeta de Misión */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span className="text-4xl">🎯</span> Misión
          </h3>
          <p className="text-gray-600 leading-relaxed text-justify mb-4">
            En DogFacts, nuestra misión fundamental es transformar la relación entre los seres humanos y sus compañeros caninos a través de la educación, el cuidado experto y la empatía profunda.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify">
            Nos dedicamos a proporcionar servicios de la más alta calidad, asegurando el bienestar físico, mental y emocional de cada mascota. Al mismo tiempo, buscamos empoderar a sus familias con el conocimiento y las herramientas necesarias para lograr una convivencia armoniosa, responsable y llena de felicidad en el hogar.
          </p>
        </div>

        {/* Tarjeta de Visión */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span className="text-4xl">🔭</span> Visión
          </h3>
          <p className="text-gray-600 leading-relaxed text-justify mb-4">
            Aspiramos a consolidarnos como el centro integral líder y el referente número uno en cuidado, adiestramiento y bienestar canino, no solo a nivel local en Canalejas, sino expandiendo nuestro impacto a más comunidades.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify">
            Nuestra visión a futuro es construir una sociedad donde cada perro reciba el respeto, amor y atención que merece. Queremos ayudar a erradicar el abandono y el maltrato mediante la concientización, creando una red de dueños informados y unidos por el amor incondicional a los animales.
          </p>
        </div>
      </div>

      {/* NUEVA SECCIÓN: VALORES FUNDAMENTALES */}
      <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100 shadow-inner">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            Nuestros Valores Fundamentales
          </h3>
          <p className="text-gray-500">Los pilares que guían cada acción que tomamos en DogFacts.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Valor 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50">
            <div className="text-4xl mb-3">❤️</div>
            <h4 className="font-bold text-orange-700 mb-2 text-lg">Empatía</h4>
            <p className="text-sm text-gray-600 leading-snug">
              Entendemos, respetamos y sentimos las necesidades de cada perrito como si fueran propias.
            </p>
          </div>
          
          {/* Valor 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50">
            <div className="text-4xl mb-3">🛡️</div>
            <h4 className="font-bold text-orange-700 mb-2 text-lg">Responsabilidad</h4>
            <p className="text-sm text-gray-600 leading-snug">
              Actuamos con total compromiso, ética y profesionalismo en cada servicio que brindamos.
            </p>
          </div>
          
          {/* Valor 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50">
            <div className="text-4xl mb-3">⭐</div>
            <h4 className="font-bold text-orange-700 mb-2 text-lg">Excelencia</h4>
            <p className="text-sm text-gray-600 leading-snug">
              Buscamos la capacitación constante y la máxima calidad en todos nuestros procesos.
            </p>
          </div>
          
          {/* Valor 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="font-bold text-orange-700 mb-2 text-lg">Comunidad</h4>
            <p className="text-sm text-gray-600 leading-snug">
              Fomentamos una red de apoyo, aprendizaje y educación para todos los dueños responsables.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default MisionVision;