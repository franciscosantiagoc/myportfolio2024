import ProjectCard from '../../components/cardProject';
import { CardProject } from '../../interfaces/card_project-interfaces';
import { dataProjects } from '../../data/dataProjects';
export default function index() {
    const paintProjects = (projects: CardProject[]) => {
        return(
          <>
            {projects.map((project: CardProject) => {
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
              />)
            })}      
          </>
        )
      }



  return (
    <section className="projects" id="projects">
        <div className="container">
            <h2 className='main-title'>Proyectos</h2>
            <form className="search-project">
                <div className="input-group mb-3 d-block">
                    <label htmlFor="input-seach-project">@example.com</label>
                    <input type="text" className="form-control w-100" id="input-seach-project" placeholder="Escriba la tecnología o nombre del proyecto"/>
                </div>
            </form>

            <div className='projects-container'>
                {paintProjects(dataProjects)}
            </div>
        </div>
    </section>
  )
}
