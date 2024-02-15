import { CardProject } from '../../interfaces/card_project-interfaces';
import CustomButton from '../customButton';
import './cardProject.scss';

export default function index( props: CardProject) {
  const { id,
    name,
    description,
    dateStart,
    dateEnd,
    image,
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
        <CustomButton style="light-button"  text="Ver repositorio" type='link' urlRedirect={urlRepo} target='_blank'></CustomButton>
        <CustomButton style="light-button"  text="Ver proyecto" type='link' urlRedirect={urlPage} target='_blank'></CustomButton>
        { urlVideo && (<CustomButton style="light-button"  text="Ver proyecto" type='link' urlRedirect={urlVideo} target='_blank'></CustomButton>)}
      </div>
    </div>
  )
}
