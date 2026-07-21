import React from 'react';

function Inicio() {
  return (
    <section className="p-8 animate-fade-in text-center">
      <h1 className="text-5xl font-extrabold text-orange-600 mb-6">
        Bienvenidos al Mundo de los Perros Curiosos
      </h1>
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <p className="text-xl text-gray-700 mb-6 font-medium">
          Descubre los datos más fascinantes, divertidos y sorprendentes sobre el mejor amigo del humano.
        </p>
        
        <img 
          src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80" 
          alt="Perro curioso" 
          className="rounded-xl shadow-md mx-auto mb-6 hover:scale-105 transition-transform duration-300"
        />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Sabías que...?</h2>
        <p className="text-gray-600">
          El olfato de un perro es entre 10,000 y 100,000 veces más agudo que el del ser humano. ¡Su nariz es como un radar de alta tecnología!
        </p>
      </div>
    </section>
  );
}

export default Inicio;