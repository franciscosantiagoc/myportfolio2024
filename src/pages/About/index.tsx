import './About.scss';
import image1 from './../../assets/images/about/picture1.jpg'
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About me</h2>
        <div className="text-content">
          <p>Soy Francisco Santiago, Ingeniero en Sistemas Computacionales especializado en el desarrollo Front End.</p>
          <p>Me especializo en la creación de sitios y aplicaciones web, tengo experiencia trabajando con Adobe Experience Manager, React, NodeJS y Angular.</p>
          <p>Soy apasionado por la tecnología, por lo que siempre busco mejorar mis habilidades y seguir creciendo profesionalmente para poder hacer aportes valiosos en equipo. Me inicié en el mundo de la programación desde 2014, creando mi primera aplicación de escritorio utilizando Java, posteriormente ir adentrándome en nuevas tecnologías por curiosidad, con la intención de ir aprendiendo nuevas cosas.</p>
          <p>Me considero una persona autodidacta, organizada y constante, a la que le gusta resolver problemas sin temor a enfrentarme a nuevos desafíos.</p>
        </div>
        <div className="image-content">
          <img src={image1} alt="Mantenimiento preventivo de equipos de computo" />
        </div>
      </div>
    </section>
  )
}
