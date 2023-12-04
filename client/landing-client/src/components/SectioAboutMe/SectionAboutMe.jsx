import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fondo from './Fondo.png';

const SectionAboutMe = () => {
  return (
    <section id="sobre-mi" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={fondo}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="absolute top-0 left-0 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full  z-1"></div>
      <div className="relative z-2 text-white max-w-2xl mx-auto text-center">
        <h1 className="text-4xl text-black font-bold mb-6">¡Hola, soy [Tu Nombre]!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Soy un apasionado desarrollador de software, y mi misión es transformar ideas en soluciones digitales innovadoras.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Como propietario de [Nombre de tu Agencia], me especializo en el desarrollo de software de gestión, creación de landing pages atractivas, implementación de plataformas de e-commerce y mucho más.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Mi enfoque es proporcionar soluciones personalizadas que se adapten a las necesidades únicas de tu negocio, utilizando las últimas tecnologías y mejores prácticas de desarrollo.
        </p>
        <Link href="#contactame">
          <h2 className="text-blue-500 hover:underline cursor-pointer">¡Contáctanos para empezar tu proyecto!</h2>
        </Link>
      </div>
    </section>
  );
};

export default SectionAboutMe;
