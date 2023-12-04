'use client'
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    inquiry: '',
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
    // Aquí puedes realizar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    // También puedes realizar una solicitud HTTP para enviar los datos a un servidor
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Apellido
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">
          Consulta
        </label>
        <textarea
          id="inquiry"
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          rows="3"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
