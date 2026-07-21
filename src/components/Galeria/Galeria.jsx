const Galeria = () => {
  const fotos = [
    { url: "https://images.unsplash.com/photo-1516382799247-1c0f6df6b4d7?auto=format&fit=crop&w=800&q=80", titulo: "🐶 Les encanta jugar y explorar. Muchos perros utilizan su olfato para conocer el mundo y encontrar nuevos amigos." },
    { url: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80", titulo: "👀 Su visión es forjada para detectar movimiento, lo que los hace excelentes compañeros en actividades al aire libre." },
    { url: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80", titulo: "❤️ Son animales muy sociales. Viven mejor con compañía humana y cariño constante." },
    { url: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&w=800&q=80", titulo: "🏃 Pueden correr y saltar con gran energía. Muchas razas se destacan por su resistencia y velocidad." },
    { url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80", titulo: "👂 Sus orejas expresan emociones. Levantarlas o bajarlas ayuda a comunicar cómo se sienten." },
    { url: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80", titulo: "🧠 Tienen una memoria sorprendente. Pueden aprender trucos y recordar rutinas con práctica y paciencia." }
  ];

  const videos = [
    { 
      url: "https://www.w3schools.com/html/mov_bbb.mp4", 
      titulo: "Cómo herrar un caballo" 
    },
    { 
      url: "https://www.w3schools.com/html/mov_bbb.mp4", 
      titulo: "Cuidados básicos" 
    },
    { 
      url: "https://www.w3schools.com/html/mov_bbb.mp4", 
      titulo: "Técnicas de doma" 
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-950 text-center mb-10">Galería y Formación Equina</h2>
        
        {/* Sección de Fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {fotos.map((foto, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <img src={foto.url} alt={foto.titulo} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-bold">{foto.titulo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Videos Nativos HTML5 */}
        <h3 className="text-2xl font-bold text-orange-900 mb-6 text-center">Videos Educativos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-md bg-orange-50/50 border border-orange-100 flex flex-col justify-between">
              <video 
                controls 
                className="w-full h-56 object-cover bg-black"
              >
                <source src={video.url} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <p className="p-4 text-center font-bold text-orange-950">{video.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;