import {ProjectCard} from './ProjectCard'
import galacticseige from '../assets/img/galactic_seige.gif'
import '../CSS/projectcard.css';


export const Projects = () => {
    const projects = [
        {
            title: "Galactic Seige",
            description: "a 2D game built with python and pygame, utiliziing the principles of object oriented programming",
            imgUrl: galacticseige,
            githubLink: "https://github.com/JoshC1998/Galactic_Seige",
        },
    ]
    return (
        <section className="project" id="project">
            <h2>Projects</h2>
            <p className="projects-p">Hover over image for more details</p>
                <div className="project-container">
                {projects.map((project,index) => {
                        return(
                            <ProjectCard
                            key={index}
                            project={project}/>
                            )
                        })
                    }
                </div>
        </section>
    )
}