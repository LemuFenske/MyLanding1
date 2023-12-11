import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShoppingCart, faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Servicios() {
    return (
      <div className="flex flex-col items-center h-1/4 pb-10">
      <h2 className="flex items-center text-lg mb-4">
        <FontAwesomeIcon icon={faCode} className="mr-2 h-6" />
        Software de gestión
      </h2>
    
      <h2 className="flex items-center text-lg mb-4">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2 h-6" />
        E-commerce
      </h2>
    
      <h2 className="flex items-center text-lg mb-4">
        <FontAwesomeIcon icon={faFileAlt} className="mr-2 h-6" />
        Landing pages
      </h2>
    
      <h2 className="flex items-center text-lg">
        <FontAwesomeIcon icon={faPlus} className="mr-2 h-6" />
        Algo más
      </h2>
    </div>
    
    )
  }