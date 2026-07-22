import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importación de tus componentes en orden
import Inicio from './components/Inicio/Inicio';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import MisionVision from './components/MisionVision/MisionVision';
import Servicios from './components/Servicios/Servicios';
import Clientes from './components/Clientes/Clientes';
import Galeria from './components/Galeria/Galeria';
import RedesSociales from './components/RedesSociales/RedesSociales';
import Testimonios from './components/Testimonios/Testimonios';
import Contacto from './components/Contacto/Contacto';
import AvisoPrivacidad from './components/AvisoPrivacidad/AvisoPrivacidad';

function App() {
  // Estado para controlar el menú en pantallas pequeñas
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-orange-50/30">
        
        {/* BARRA DE NAVEGACIÓN GLOBAL */}
        <nav className="bg-orange-600 text-white p-4 shadow-lg relative z-50">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-4">
            
            {/* LOGO DE LA PÁGINA */}
            <Link to="/" onClick={cerrarMenu} className="text-2xl font-bold hover:opacity-90">
              DogFacts 🐶
            </Link>
            
            {/* VISTA EN LAPTOP / ESCRITORIO (Se oculta en celulares con "hidden lg:flex") */}
            <div className="hidden lg:flex flex-wrap gap-4 text-sm font-medium items-center">
              <Link to="/" className="hover:text-orange-200 transition-colors">Inicio</Link>
              <Link to="/nosotros" className="hover:text-orange-200 transition-colors">Sobre Nosotros</Link>
              <Link to="/mision-vision" className="hover:text-orange-200 transition-colors">Misión y Visión</Link>
              <Link to="/servicios" className="hover:text-orange-200 transition-colors">Servicios</Link>
              <Link to="/clientes" className="hover:text-orange-200 transition-colors">Clientes</Link>
              <Link to="/galeria" className="hover:text-orange-200 transition-colors">Galería</Link>
              <Link to="/redes-sociales" className="hover:text-orange-200 transition-colors">Redes Sociales</Link>
              <Link to="/testimonios" className="hover:text-orange-200 transition-colors">Testimonios</Link>
              <Link to="/contacto" className="hover:text-orange-200 transition-colors font-semibold bg-orange-700 px-3 py-1 rounded">Contacto</Link>
              <Link to="/aviso-privacidad" className="hover:text-orange-200 transition-colors">Privacidad</Link>
            </div>

            {/* BOTÓN DE TRES PUNTOS (Solo visible en Celular / Pantalla pequeña con "lg:hidden") */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-orange-700 transition-colors focus:outline-none"
              aria-label="Menú de navegación"
            >
              {/* Ícono SVG de 3 Puntos Verticales */}
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>

          {/* MENÚ DESPLEGABLE MÓVIL (Aparece únicamente en celular cuando presionas los 3 puntos) */}
          {menuAbierto && (
            <div className="lg:hidden absolute right-4 top-16 bg-white text-gray-800 rounded-2xl shadow-2xl p-4 w-64 border border-orange-100 flex flex-col gap-1 z-50">
              <Link to="/" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">🏠 Inicio</Link>
              <Link to="/nosotros" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">ℹ️ Sobre Nosotros</Link>
              <Link to="/mision-vision" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">🎯 Misión y Visión</Link>
              <Link to="/servicios" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">🛠️ Servicios</Link>
              <Link to="/clientes" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">👥 Clientes</Link>
              <Link to="/galeria" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">🖼️ Galería</Link>
              <Link to="/redes-sociales" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">🌐 Redes Sociales</Link>
              <Link to="/testimonios" onClick={cerrarMenu} className="hover:bg-orange-50 p-2.5 rounded-xl font-medium transition-colors">💬 Testimonios</Link>
              
              <div className="my-1 border-t border-gray-100"></div>

              <Link to="/contacto" onClick={cerrarMenu} className="bg-orange-600 text-white text-center p-2.5 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-sm">📞 Contacto</Link>
              <Link to="/aviso-privacidad" onClick={cerrarMenu} className="hover:bg-orange-50 p-2 rounded-xl text-xs text-gray-500 hover:text-gray-800 transition-colors text-center mt-1">🔒 Aviso de Privacidad</Link>
            </div>
          )}
        </nav>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<SobreNosotros />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/redes-sociales" element={<RedesSociales />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
          </Routes>
        </main>
        
        {/* PIE DE PÁGINA */}
        <footer className="bg-gray-800 text-white py-6 text-center text-sm mt-12">
          <p>&copy; 2026 DogFacts - Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
              Contacto
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/aviso-privacidad" className="text-gray-400 hover:text-white transition-colors">
              Aviso de Privacidad Integral
            </Link>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;