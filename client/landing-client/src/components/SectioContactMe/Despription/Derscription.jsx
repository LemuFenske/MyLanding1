// Importa React y las clases de Tailwind necesarias
import React from 'react';

export default function Description() {
  return (
    <div className="mx-10 h-full flex flex-col justify-center ">
  <h2 className="text-5xl font-bold mb-4 px-auto text-center">Innovate</h2>
  <p className="text-gray-700 mb-4">
    Descubre la diferencia con nuestro software especializado. En Innovate, creamos soluciones tecnológicas disruptivas para gestionar tu empresa de manera eficiente.
  </p>

  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2">Lo Que Ofrecemos:</h3>
    <ul className="list-disc list-inside">
      <li><span className="font-bold">Software de Gestión Personalizado:</span> Adaptamos cada solución a las necesidades específicas de tu negocio.</li>
      <li><span className="font-bold">Landing Pages Impactantes:</span> Diseño cautivador que convierte visitantes en clientes.</li>
      <li><span className="font-bold">E-commerce Eficiente:</span> Plataformas de comercio electrónico intuitivas y vanguardistas.</li>
    </ul>
  </div>

  <div>
    <p className="font-bold">
      Opta por la excelencia con Innovate.
    </p>
  </div>
</div>

  );
}
