import Link from "next/link"
import ContactForm from "../ContactForm/ContactForm"


export default function SectioContactMe () {
    return (
        <section id="contactame" className="bg-gray-100 text-black p-8 min-h-screen w-full">
        <ContactForm/>
        <Link href="#nuestros-productos">
          <h2 className="text-green-500 hover:underline">Ir a Productos</h2>
        </Link>
      </section>
    )
  }