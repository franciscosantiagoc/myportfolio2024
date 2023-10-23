import { Chrono } from 'react-chrono';
import data from './data';
import './Experiences.scss';
export default function Experiences() {
  return (
    <section className='experiences' id='experiences'>
        <div className="container">
            <h2 className="main-title">Experiencias</h2>

            <Chrono items={data} mode="VERTICAL_ALTERNATING"/>
            
        </div>
    </section>
  )
}
