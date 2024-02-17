import './Skills.scss';
import CardTitle from '../../components/cardTitle';
import { Card } from '../../interfaces/card_title-interfaces';
import { data } from './../../data/dataSkills';
export default function Skills() {
  const { skills, knowledges } = data;

  const paintCards = (skills: Card[]) => {
    return(
      <>
        {skills.map((skill: Card) => {
          return (<CardTitle title={skill.title} id={skill.id} image={skill.image} isSmallCard={skill.isSmallCard} />)
        })}      
      </>
    )
  }

  return (
    <section className="skills" id="knowledge">
      <div className="container">
        <h2 className='main-title'>MY SKILLS</h2>
        <div className="skills-content">
          {
            paintCards(skills)
          }
        </div>
        <div className="knowledge-content">
          {
            paintCards(knowledges)
          }
        </div>
      </div>
    </section>
  )
}
