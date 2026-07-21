import React from 'react';

function SobreNosotros() {
  return (
    <section className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-orange-600 mb-6 text-center border-b-2 border-orange-200 pb-4">
        Sobre Nosotros
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
        <div>
          <p className="text-gray-700 text-lg mb-4 text-justify">
            Somos un equipo de entusiastas y amantes de los animales dedicados a recopilar, verificar y compartir los datos más sorprendentes sobre los perros. Nuestro objetivo es educar y entretener a la comunidad perruna en todo el mundo.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">¿Qué nos hace diferentes?</h3>
          {/* Aquí aplicamos la lista desordenada requerida por el cliente */}
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-lg">
            <li>🐾 Pasión genuina por el bienestar animal.</li>
            <li>🔍 Investigación profunda en cada dato curioso.</li>
            <li>🤝 Compromiso con nuestra comunidad de lectores.</li>
            <li>🦴 Actualizaciones constantes y divertidas.</li>
          </ul>
        </div>
        
        <img 
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80" 
          alt="Perrito feliz" 
          className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}

export default SobreNosotros;