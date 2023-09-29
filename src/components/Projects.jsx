import ProjectsItem from "./ProjectsItem"
import Image2 from "../assets/project-2.jpeg"
import Image3 from "../assets/project-3.jpeg"
import Image5 from "../assets/project-5.jpeg"
import Image6 from "../assets/project-6.jpeg"
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
    <p className="text-center py-8">
    Découvrez ma collection de projets Python et React dédiée à enrichir mon expérience de programmation.
    Explore diverses thématiques, de MongoDB, React, React Native à Python en passant par des projets de ligne 
    de commande et des exercices pratiques pour renforcer mes compétences.Les codes sources sont disponibles sur mon Github et les ReadMe des projets.
    </p>
    <div className="grid sm:grid-cols-3 gap-10">
      <ProjectsItem img={Image2} title='Fashion App'/>
      <ProjectsItem img={Image3} title='Assurance App'/>
      <ProjectsItem img={Image5} title='Restaurant App'/>
      <ProjectsItem img={Image6} title='Travel App'/>
    </div>
    </div>
  )
}

export default Projects
