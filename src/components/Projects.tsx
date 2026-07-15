import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#FFF5F7]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-center">
          Featured Projects
        </h1>

        <p className="text-center text-gray-500 mt-5">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}