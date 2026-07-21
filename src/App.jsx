import React from 'react';
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
import Contacto from './components/Contacto/Contacto'; // Importado aquí
import AvisoPrivacidad from './components/AvisoPrivacidad/AvisoPrivacidad';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-orange-50/30">
        
        {/* BARRA DE NAVEGACIÓN GLOBAL */}
        <nav className="bg-orange-600 text-white p-4 shadow-lg">
          <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-4">
            <h1 className="text-2xl font-bold">
              DogFacts 🐶
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm font-medium items-center">
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
          </div>
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