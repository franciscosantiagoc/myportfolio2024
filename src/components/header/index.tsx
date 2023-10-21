import './header.scss';
import {activeMobileMenu} from './events';
import { ImMenu3 } from 'react-icons/im';
export default function header() {
  return (
    <nav className='header'>
      <div className="container">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#experiences">Experiencias</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <ImMenu3 className="toggle-icon" style={{color: '#ffffff', fontSize:'30'}} onClick={activeMobileMenu}/>
      </div>
      
    </nav>
  )
}
