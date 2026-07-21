import React from 'react';

function AvisoPrivacidad() {
  return (
    <section className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-xl mb-12 text-gray-700 leading-relaxed border border-gray-100">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-2">
        Aviso de Privacidad Integral
      </h2>
      <p className="text-center text-xs text-gray-400 mb-8">
        Última actualización: Julio de 2026 | Responsable: Plataforma Web DogFacts
      </p>
      
      <p className="mb-6 text-justify">
        En <strong>DogFacts</strong>, la confianza de nuestros usuarios es lo más importante. Por ello, asumimos el compromiso legal y ético de proteger, salvaguardar y mantener la estricta confidencialidad de los datos personales que usted nos proporciona, garantizando un tratamiento legítimo, controlado e informado.
      </p>

      <hr className="border-orange-100 mb-6" />

      {/* 1. SECCIÓN: LISTA DESORDENADA (DATOS DETALLADOS) */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          1. Datos personales sometidos a tratamiento
        </h3>
        <p className="mb-4 text-justify">
          Para navegar de forma óptima en nuestra plataforma, interactuar en los foros, enviar consultas y publicar opiniones en la sección de testimonios, recolectamos la siguiente información de manera directa o mediante herramientas tecnológicas:
        </p>
        
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600 bg-orange-50/40 p-5 rounded-xl border border-orange-100">
          <li><strong>Datos de Identificación:</strong> Nombre completo, apellidos y/o pseudónimos elegidos por el usuario.</li>
          <li><strong>Datos de Contacto Electrónico:</strong> Dirección de correo electrónico personal o empresarial y números de teléfono.</li>
          <li><strong>Información Específica de Mascotas:</strong> Nombre del canino, raza, edad, género, peso e historial de comportamiento compartido voluntariamente.</li>
          <li><strong>Datos de Interacción Digital:</strong> Comentarios, reseñas, testimonios, valoraciones de cinco estrellas y mensajes del formulario de soporte.</li>
          <li><strong>Datos Técnicos de Navegación:</strong> Dirección IP codificada, tipo y versión del navegador web, sistema operativo del dispositivo, identificadores de sesión y registros de errores.</li>
          <li><strong>Datos de Preferencias (Cookies):</strong> Historial de clics dentro del sitio, tiempo de permanencia en secciones específicas y configuraciones de idioma.</li>
        </ul>
      </div>

      {/* 2. SECCIÓN: LISTA ORDENADA (FINALIDADES DETALLADAS) */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          2. Finalidades primarias y secundarias del uso de datos
        </h3>
        <p className="mb-4 text-justify">
          El tratamiento de la información recabada se realiza bajo una estricta jerarquía operativa. Los datos serán utilizados rigurosamente en el siguiente orden secuencial:
        </p>
        
        <ol className="list-decimal list-inside space-y-3 pl-4 text-gray-600">
          <li className="text-justify"><strong>Operación del servicio:</strong> Habilitar las funciones base del sitio web y permitir la carga dinámica de información interactiva en tiempo real.</li>
          <li><strong>Moderación de contenido:</strong> Evaluar, autorizar, publicar y dar seguimiento a los comentarios y testimonios enviados por los usuarios para prevenir mensajes ofensivos o Spam.</li>
          <li><strong>Atención personalizada:</strong> Procesar las solicitudes de información, dudas o quejas que se reciban formalmente a través del módulo de contacto.</li>
          <li><strong>Análisis y optimización técnica:</strong> Evaluar métricas internas de rendimiento, solucionar fallas de código y optimizar el diseño de la interfaz web para mejorar la experiencia del usuario.</li>
          <li><strong>Seguridad de la plataforma:</strong> Identificar posibles conductas fraudulentas, mitigar ataques cibernéticos de denegación de servicio (DDoS) y proteger la integridad de la base de datos.</li>
          <li><strong>Comunicaciones y marketing (Secundaria):</strong> Enviar avisos sobre actualizaciones del sitio, boletines educativos sobre el cuidado canino o promociones especiales (el usuario puede revocar este consentimiento cuando lo desee).</li>
        </ol>
      </div>

      {/* 3. SECCIÓN: TRANSFERENCIA DE DATOS */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          3. Transferencia y resguardo de la información
        </h3>
        <p className="text-justify mb-3">
          DogFacts se compromete firmemente a <strong>no vender, alquilar, ceder ni transferir</strong> sus datos personales a terceras empresas con fines comerciales o publicitarios ajenos a nuestra plataforma. 
        </p>
        <p className="text-justify">
          Las únicas transferencias permitidas serán aquellas que se realicen a proveedores de infraestructura tecnológica esenciales (servidores de hosting, servicios de bases de datos en la nube y API de Google Maps) o por mandatos judiciales emitidos por autoridades competentes de acuerdo con la legislación vigente.
        </p>
      </div>

      {/* 4. SECCIÓN: DERECHOS ARCO */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          4. Derechos ARCO y revocación del consentimiento
        </h3>
        <p className="text-justify mb-4">
          Usted goza del derecho inalienable de ejercer sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong> sobre sus datos. Esto significa que puede:
        </p>
        <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-sm mb-4">
          <div>• <strong>Acceso:</strong> Saber qué datos tenemos guardados.</div>
          <div>• <strong>Rectificación:</strong> Corregir información errónea o desactualizada.</div>
          <div>• <strong>Cancelación:</strong> Solicitar que borremos sus datos por completo.</div>
          <div>• <strong>Oposición:</strong> Negarse a que usemos sus datos para fines específicos.</div>
        </div>
        <p className="text-justify">
          Para procesar cualquiera de estas solicitudes, o si desea que eliminemos un comentario que publicó previamente en la sección de testimonios, deberá enviar un correo electrónico formal con el asunto "Derechos ARCO" a <strong>privacidad@dogfacts.com</strong> adjuntando una identificación para validar su identidad.
        </p>
      </div>

      {/* 5. SECCIÓN: SEGURIDAD */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          5. Protocolos de seguridad técnica
        </h3>
        <p className="text-justify">
          Para garantizar la confidencialidad de la información, implementamos protocolos de seguridad estándar en la industria digital. Toda transmisión de datos en los formularios viaja cifrada mediante capas de sockets seguros (SSL/TLS). El acceso a las bases de datos está restringido bajo estrictos controles de identidad y credenciales encriptadas para evitar accesos no autorizados, pérdidas o alteraciones.
        </p>
      </div>
    </section>
  );
}

export default AvisoPrivacidad;