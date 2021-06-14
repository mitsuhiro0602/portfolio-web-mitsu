import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="p-4">
      <nav>Navbar</nav>
    </div>
    {
      projects.map(project=>(
        <div>
          <ProjectCard />
        </div>
      ))
    }
  )
}

export default Projects
