'use client'
import React, { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    empresaRubro: '',
    pais: '',
    ciudadProvincia: '',
    email: '',
    celular: '',
    mensaje: '',
    respuestaSeguridad: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="mx-10 p-6  rounded-lg drop-shadow-sm shadow-inner flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-lg mb-2">Para hablar con un <span className="font-bold">ASESOR</span></p>

      <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <input
            type="text"
            name="nombreApellido"
            value={formData.nombreApellido}
            onChange={handleChange}
            placeholder="Nombre y Apellido"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="w-1/2 ml-2">
          <input
            type="text"
            name="empresaRubro"
            value={formData.empresaRubro}
            onChange={handleChange}
            placeholder="Empresa/Rubro"
            className="w-full p-2 border rounded"
          />
        </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <input
              type="text"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              placeholder="País"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="w-1/2 ml-2">
            <input
              type="text"
              name="ciudadProvincia"
              value={formData.ciudadProvincia}
              onChange={handleChange}
              placeholder="Ciudad/Provincia"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
        </div>

        
          <div className="w-1/2 ml-2">
            <input
              type="text"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              placeholder="Celular"
              className="w-full p-2 border rounded"
            />
          
          </div>
        </div>

        <div className="mb-4">
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje"
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">¿Cuánto es 10+7?</label>
          <input
            type="text"
            name="respuestaSeguridad"
            value={formData.respuestaSeguridad}
            onChange={handleChange}
            placeholder="Pregunta de seguridad"
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded mt-4">
            Enviar
        </button>
      </form>
    </div>
  );
}
