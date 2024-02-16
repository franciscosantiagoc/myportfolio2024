import { CardProject } from '../../interfaces/card_project-interfaces';
import { Technology } from '../../interfaces/card_project-interfaces';
import CustomButton from '../customButton';

import { dataTechnologies } from '../../data/dataTechnologies';

import './cardProject.scss';

export default function index( props: CardProject) {
  const { id,
    name,
    description,
    dateStart,
    dateEnd,
    image,
    technologies,
    urlRepo,
    urlPage,
    urlVideo = null } = props;

  return (
    <div className={`card `} key={id}>
      <div className="image-content">
        <img src={image[0]} alt={`Imagen de proyecto ${name}`} />
      </div>
      <div className="text-content">
        <h2 className='card_name'>{name}</h2>
        <p className='card_description'>{description}</p>
        <p className='card_date'>{dateStart} - {dateEnd}</p>
        <div className='tech-content'>
          <ul>
            {
              technologies.length && technologies.map(tech => {
                const dataTech:Technology[] = dataTechnologies.filter(item=>item.id==tech)
                return <li>{dataTech[0].name}</li>
              })
            }
          </ul>
        </div>
        <CustomButton style="light-button"  text="Ver repositorio" type='link' urlRedirect={urlRepo} target='_blank'></CustomButton>
        <CustomButton style="light-button"  text="Ver proyecto" type='link' urlRedirect={urlPage} target='_blank'></CustomButton>
        { urlVideo && (<CustomButton style="light-button"  text="Ver proyecto" type='link' urlRedirect={urlVideo} target='_blank'></CustomButton>)}
      </div>
    </div>
  )
}
