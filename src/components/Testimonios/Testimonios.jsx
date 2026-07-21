import React, { useState } from 'react';

function Testimonios() {
  // Lista inicial de testimonios de ejemplo
  const [testimonios, setTestimonios] = useState([
    {
      id: 1,
      nombre: "María G.",
      comentario: "¡Excelente servicio! Mi perra regresó feliz y aprendió a socializar mucho mejor.",
      calificacion: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      nombre: "Carlos R.",
      comentario: "El mejor lugar para aprender sobre el cuidado canino. La información es súper útil.",
      calificacion: "⭐⭐⭐⭐⭐"
    }
  ]);

  // Estados para capturar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Función para manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    
    // Validación simple
    if (!nombre || !correo || !comentario) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    // Creamos el nuevo testimonio dinámicamente
    const nuevoTestimonio = {
      id: testimonios.length + 1,
      nombre: nombre,
      comentario: comentario,
      calificacion: "⭐⭐⭐⭐⭐" // Calificación por defecto
    };

    // Actualizamos la lista y limpiamos el formulario
    setTestimonios([...testimonios, nuevoTestimonio]);
    setNombre('');
    setCorreo('');
    setComentario('');
    setEnviado(true);

    // Ocultar el mensaje de éxito después de 4 segundos
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section className="max-w-5xl mx-auto mt-12 p-6 mb-12">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Testimonios y Opiniones 🐾
      </h2>

      {/* Grid de Testimonios Actuales */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {testimonios.map((t) => (
          <div key={t.id} className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 flex flex-col justify-between">
            <p className="text-gray-700 italic mb-4">"{t.comentario}"</p>
            <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
              <span className="font-bold text-gray-800">{t.nombre}</span>
              <span className="text-sm">{t.calificacion}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FORMULARIO DE COMENTARIOS */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          ¿Te gustó nuestro servicio?
        </h3>
        <p className="text-sm text-gray-500 text-center mb-6">
          Déjanos tu opinión y tu correo para estar en contacto.
        </p>

        {enviado && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 text-center rounded-lg font-medium">
            ¡Gracias! Tu comentario ha sido publicado con éxito.
          </div>
        )}

        <form onSubmit={manejarEnvio} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
            <input 
              type="email" 
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="ejemplo@correo.com" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Tu Comentario</label>
            <textarea 
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Cuéntanos tu experiencia con DogFacts..." 
              className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-600 text-white p-3 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-md shadow-orange-600/20"
          >
            Publicar Comentario
          </button>
        </form>
      </div>
    </section>
  );
}

export default Testimonios;