import './Home.scss';
import myPhoto from './../../assets/images/myPhoto.jpeg';
import myPortfolioPDF from './../../assets/files/CV_Francisco_Santiago.pdf';
export default function Home() {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="text-content">
          <h3>Hola, yo soy</h3>
          <h1>Francisco Santiago de la Cruz</h1>
          <h2>Desarrollador Front End</h2>

          <a className='btn btn-download' href={myPortfolioPDF} target="_blank" rel="noopener noreferrer" download='CV_Francisco_Santiago'>Descargar CV</a>
        </div>
        <div className="image-content">
          <img src={myPhoto} alt="Fotografía de Francisco Santiago" />
        </div>
      </div>
    </section>
  )
}
