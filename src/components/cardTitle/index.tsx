import { Card } from '../../interfaces/card_title-interfaces';
import './cardTitle.scss';

export default function index( props: Card) {
  const { id, title, image, isSmallCard } = props;
  return (
    <div className={`card ${isSmallCard ? 'small--card' : ''}`} key={id}>
      <div className="image-content">
        <img src={image} alt={`Imagen de ${title}`} />
      </div>
      <div className="text-content">
        <h2 className='card_title'>{title}</h2>
      </div>
    </div>
  )
}
