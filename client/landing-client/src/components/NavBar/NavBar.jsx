'use client'
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className="z-40 w-full flex items-center text-white h-14 text-xl justify-end relative font-sans shadow-md">
         <div className=" w-full">
         <div className="flex items-center justify-between">
           <h2 className="ml-3 sm:ml-28 font-bold text-white font-mono">Agencia</h2>
           <div className="hidden sm:flex justify-end">
            <Link href="#contactame" className="mx-3 transform transition hover:text-gray-500 ">
              Contáctame
             </Link>
             <Link href="#sobre-mi" className="mx-3 transform transition hover:text-gray-500">
               Sobre Mi
             </Link>
             <Link href="#nuestros-productos" className="mx-3 transform transition hover:text-gray-500">
               Servicios
             </Link>
           </div>
           <div className="sm:hidden">
             <button className="mx-3 transform transition hover:text-gray-500" onClick={toggleMenu}>
             ☰
            </button>
           </div>
       </div>
        {showMenu && (
          <div className="flex flex-col bg-gray-950 mt-28">
            <Link
              href="#sobre-mi"
              className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
              onClick={toggleMenu}
            >
              Sobre Mi
            </Link>
            <Link
              href="#contactame"
              className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
              onClick={toggleMenu}
            >
              Contactame
            </Link>
            <Link
              href="#nuestros-productos"
              className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
          </div>
        )}
      </div>
        </div>
    )
  }

