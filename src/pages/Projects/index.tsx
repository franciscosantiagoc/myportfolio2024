import { ChangeEvent, useState, useEffect } from 'react';
import ProjectCard from '../../components/cardProject';
import { CardProject, Technology } from '../../interfaces/card_project-interfaces';
import { dataProjects } from '../../data/dataProjects';
import { dataTechnologies } from '../../data/dataTechnologies';

import './Projects.scss';
export default function Projects() {
  const [ tech, setTech] = useState('');
  const [ projects, setProjects ] = useState<CardProject[]>(dataProjects);

  const paintProjects = (/* projects: CardProject[] */) => {
      return(
        <>
          {projects.map((project: CardProject, index) => {
            return (<ProjectCard 
              id={project.id} 
              name={project.name} 
              image={project.image}
              description={project.description}
              dateStart={project.dateStart}
              dateEnd={project.dateEnd}
              technologies={project.technologies}
              urlRepo={project.urlRepo}
              urlPage={project.urlPage}
              urlVideo={project.urlVideo}
              key={index}
            />)
          })}      
        </>
      )
    }
  
  const handlerTechChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTech(event.target.value)
  }
  

  const filterProjects = () => {
    if(!tech) {
      setProjects(dataProjects);
    }else {

      const filteredProjects:CardProject[] = dataProjects.filter( (item:CardProject) => {
        //debugger
        //se filtran las tecnologias del proyecto actual
        const currentTechnologiesFiltered: Technology[] = dataTechnologies.filter(techItem=> {
          if(item.technologies.includes(techItem.id)) return true;
          return false;
        }) 
        //se obtiene solo los nombres de las tecnologias
        const currentTechnologies: string[] = currentTechnologiesFiltered.map(techItem=> {
          return techItem.name.toLowerCase();
        }) 

        const hasCurrentTech: boolean = !!currentTechnologies.filter(item=>item.includes(tech.toLowerCase())).length
        return item.name.toLowerCase().includes(tech.toLowerCase()) || hasCurrentTech;
      })
      console.log(filteredProjects)
      setProjects(filteredProjects);
    }
  }

  useEffect(() => {
    filterProjects();
  }, [tech])
  

  return (
    <section className="projects" id="projects">
        <div className="container">
            <h2 className='main-title'>Proyectos</h2>
            <form className="search-project">
                <div className="input-group mb-3 d-block">
                    <label htmlFor="input-seach-project">Busqueda de proyecto</label>
                    <input type="text" 
                      className="form-control w-100" 
                      id="input-seach-project" 
                      placeholder="Escriba la tecnología o nombre del proyecto"
                      onChange={handlerTechChange}
                    />
                </div>
            </form>

            <div className='projects-container'>
                {paintProjects()}
            </div>
        </div>
    </section>
  )
}
