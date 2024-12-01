import './About.scss';
import image1 from './../../assets/images/about/picture1.jpg'
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About me</h2>
        <div className="text-content">
          <p>Mi nombre es Francisco Santiago, <b>Ingeniero semi-senior en el desarrollo Front-end</b> con 3 años de experiencia en el desarrollo de páginas webs responsivos, escalables y de alta calidad basado en componentes utilizando tecnologías de vanguardia como <b>Adobe Experience Manager, React y Angular</b>, combinando mi pasión por la tecnología con un enfoque en la resolución de problemas y la entrega de soluciones innovadoras.</p>
          <p>Mis principales habilidades son</p>
          <ul>
            <li><b>Diseño y desarrollo:</b> Creación de interfaces de usuario personalizadas, interactivas y responsivas, siguiendo las últimas tendencias de diseño.</li>
            <li><b>Implementación de diseños UX/UI</b> Colaboro estrechamente con diseñadores para comprender los requisitos de diseño y traducirlos en código limpio y eficiente.</li>
            <li><b>Integración de librerías</b>: Experiencia en la selección e implementación de librerías para agilizar el desarrollo y mejorar la calidad del código.</li>
            <li><b>Integración de APIs:</b> Conexión de front-end con back-end para crear aplicaciones dinámicas y completas.</li>
            <li><b>SEO:</b> Implementación de técnicas de SEO para mejorar la visibilidad de los sitios web en los motores de búsqueda.</li>
            <li><b>Desarrollo de componentes reutilizables:</b> Especialista en crear sistemas de diseño escalables, basados en componentes, para garantizar una experiencia de usuario de manera eficiencia en los proyectos.</li>
            
          </ul>
        </div>
        <div className="image-content">
          <img src={image1} alt="Mantenimiento preventivo de equipos de computo" />
        </div>
      </div>
    </section>
  )
}
