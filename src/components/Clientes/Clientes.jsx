import React, { useState } from 'react';

function Clientes() {
  // 1. Estado para saber qué aliado está seleccionado (null significa que el modal está cerrado)
  const [aliadoSeleccionado, setAliadoSeleccionado] = useState(null);

  // 2. Base de datos simulada con la información extra de cada aliado
  const aliados = [
    {
      id: 1,
      nombre: "DoggyFood",
      icono: "🐾",
      descripcion: "Nuestro proveedor oficial de nutrición. DoggyFood desarrolla alimento premium libre de granos, asegurando que los perritos de nuestra comunidad tengan la mejor energía y salud digestiva.",
      sitioWeb: "www.doggyfood-ejemplo.com"
    },
    {
      id: 2,
      nombre: "VetClinic",
      icono: "🏥",
      descripcion: "Clínica veterinaria aliada disponible 24/7. Cuentan con especialistas en traumatología, medicina interna y servicios de urgencia para garantizar el bienestar médico de todas las mascotas.",
      sitioWeb: "www.vetclinic-ejemplo.com"
    },
    {
      id: 3,
      nombre: "PuppyCare",
      icono: "🎾",
      descripcion: "Especialistas en el desarrollo de accesorios y juguetes interactivos. Sus productos están diseñados para estimular la inteligencia y reducir el estrés en perros de todas las edades.",
      sitioWeb: "www.puppycare-ejemplo.com"
    },
    {
      id: 4,
      nombre: "AnimalWorld",
      icono: "🌎",
      descripcion: "Organización internacional dedicada al rescate y adopción responsable. Trabajamos de la mano con ellos para rehabilitar perritos en situación de calle y encontrarles un hogar amoroso.",
      sitioWeb: "www.animalworld-ejemplo.com"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mt-12 p-6 mb-12">
      
      {/* ENCABEZADO */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          Nuestros Clientes y Aliados
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Gracias a la confianza de estos aliados estratégicos, podemos seguir brindando información de calidad y los mejores servicios para la comunidad perruna.
        </p>
      </div>

      {/* CUADRÍCULA DE TARJETAS (IGUAL A TU IMAGEN) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {aliados.map((aliado) => (
          <div 
            key={aliado.id}
            onClick={() => setAliadoSeleccionado(aliado)} // Abre el modal al hacer clic
            className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b-4 border-orange-500 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-5xl mb-4">{aliado.icono}</div>
            <h3 className="text-xl font-bold text-gray-800">{aliado.nombre}</h3>
          </div>
        ))}
      </div>

      {/* VENTANA EMERGENTE (MODAL) */}
      {aliadoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          {/* Contenedor del Modal */}
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-[fadeIn_0.3s_ease-out]">
            
            {/* Botón para cerrar (X) */}
            <button 
              onClick={() => setAliadoSeleccionado(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-600 bg-gray-100 hover:bg-orange-50 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Contenido del Modal */}
            <div className="text-center">
              <div className="text-6xl mb-4">{aliadoSeleccionado.icono}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {aliadoSeleccionado.nombre}
              </h3>
              <div className="h-1 w-16 bg-orange-500 mx-auto mb-6 rounded-full"></div>
              
              <p className="text-gray-600 text-justify mb-6 leading-relaxed">
                {aliadoSeleccionado.descripcion}
              </p>
              
              <button 
                onClick={() => alert(`Saliendo hacia: ${aliadoSeleccionado.sitioWeb}`)}
                className="w-full bg-orange-50 text-orange-600 font-bold py-3 px-4 rounded-xl border border-orange-200 hover:bg-orange-600 hover:text-white transition-colors"
              >
                Visitar Sitio Web
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Clientes;