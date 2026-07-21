import React from 'react';

function RedesSociales() {
  return (
    <section className="max-w-5xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg mb-12">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Conecta con Nosotros
      </h2>

      {/* Contenedor de Botones de Redes Sociales */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all text-center text-lg"
        >
          Facebook
        </a>
        
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto bg-pink-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-pink-700 hover:scale-105 transition-all text-center text-lg"
        >
          Instagram
        </a>
        
        <a 
          href="https://www.youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition-all text-center text-lg"
        >
          YouTube
        </a>
      </div>

      {/* Contenedor de Ubicación Google Maps */}
      <div className="w-full bg-orange-50 p-4 rounded-xl border-2 border-orange-100">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Nuestra Ubicación: Canalejas
        </h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-inner">
          <iframe 
            // URL dinámica de Google Maps apuntando a Canalejas
            src="https://maps.google.com/maps?q=Canalejas&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Ubicación Canalejas en Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default RedesSociales;