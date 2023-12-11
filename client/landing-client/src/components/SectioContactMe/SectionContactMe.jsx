import Description from "./Despription/Derscription"
import ContactMe from "./ContactForm/ContactForm"


export default function SectioContactMe () {
    return (
        <section id="contactame" className="bg-gray-100 text-black min-h-screen w-full">
          <div className='flex flex-col justify-center items-center w-full min-h-screen'>
            <div className='h-screen w-full flex justify-center items-center'>
              <div className='flex justify-center w-full my-auto'>
                <div className="w-1/2">
                  <Description/>
                </div>
                <div className="w-1/2">
                  <ContactMe/>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }