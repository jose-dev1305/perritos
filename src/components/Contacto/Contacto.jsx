import React, { useState } from 'react';

function Contacto() {
  // Estado para capturar los datos y mostrar mensaje de éxito
  const [datos, setDatos] = useState({ nombre: '', correo: '', asunto: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  // Función para actualizar los datos mientras el usuario escribe
  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  // Función al presionar enviar
  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    // Limpiar el formulario
    setDatos({ nombre: '', correo: '', asunto: '', mensaje: '' });
    // Ocultar la alerta de éxito después de 4 segundos
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section className="max-w-6xl mx-auto mt-12 p-6 mb-12">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-4">
        ¡Ponte en Contacto con Nosotros! 🐾
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        ¿Tienes alguna duda sobre nuestros servicios, quieres agendar una cita o necesitas asesoría para tu perrito? Escríbenos y te responderemos lo antes posible.
      </p>

      <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
        
        {/* COLUMNA 1: INFORMACIÓN DIRECTA */}
        <div className="bg-orange-50 p-8 rounded-xl border border-orange-200 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Información Directa</h3>
          
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="font-bold text-gray-900">Ubicación</h4>
                <p>Canalejas, Estado de México</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-bold text-gray-900">Teléfono</h4>
                <p>+52 (55) 1234 - 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <h4 className="font-bold text-gray-900">Correo Electrónico</h4>
                <p>hola@dogfacts.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🕒</span>
              <div>
                <h4 className="font-bold text-gray-900">Horario de Atención</h4>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA 2: FORMULARIO DE CONTACTO */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
          
          {enviado && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 text-center rounded-lg font-medium border border-green-200">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </div>
          )}

          <form onSubmit={manejarEnvio} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo</label>
              <input 
                type="text" 
                name="nombre"
                value={datos.nombre}
                onChange={manejarCambio}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                name="correo"
                value={datos.correo}
                onChange={manejarCambio}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Asunto</label>
              <input 
                type="text" 
                name="asunto"
                value={datos.asunto}
                onChange={manejarCambio}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                placeholder="Ej. Consulta sobre adiestramiento"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
              <textarea 
                name="mensaje"
                value={datos.mensaje}
                onChange={manejarCambio}
                required
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-orange-600 text-white p-3 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contacto;