import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fondo from './Fondo.png';
import NavBar from '../NavBar/NavBar';
import Info from './Info/Info';
import Logo from './Logo/Logo';
import Servicios from './Servicios/Servicios';

const SectionAboutMe = () => {
  return (
    <section id="sobre-mi" className="relative min-h-screen w-full overflow-hidden bg-gray-500 text-black">
      {/* <Image
        src={fondo}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Fondo de Landing Page"
        className="absolute top-0 left-0 z-0"
      /> */}
      <NavBar/>
      <div className='absolute flex flex-col justify-center items-center w-full min-h-screen'>
      <div className='h-screen w-full'>
        <div className='flex flex-wrap justify-center items-center w-full h-3/4'>
          <div className="w-full md:w-1/2 mb-4">
            <Info />
          </div>
          <div className="w-full md:w-1/2">
            <Logo/>
          </div>
        </div>

      <Servicios className='h-1/4'/>

      </div>
    </div>

    </section>
  );
};

export default SectionAboutMe;
