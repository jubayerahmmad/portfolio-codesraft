import { Link } from "react-router-dom";
import projects from "../../data/projects";
import ProjectCard from "../Cards/ProjectCard";

const Projects = () => {
  return (
    <section className="w-full py-24 bg-cyan-950/40">
      <div className="max-w-7xl mx-auto px-4">
        {/* header */}
        <div className="flex flex-col gap-4 justify-start">
          <h1 className="section-header">MY RECENT WORKS</h1>
          <h2 className="text-2xl md:text-4xl font-bold">Featured Projects</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-10">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link to="/projects">
          <button className="btn-primary">View All Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
