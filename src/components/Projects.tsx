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

        <div
          className="
            flex
            gap-6
            overflow-x-auto
            snap-x
            snap-mandatory
            lg:grid
            lg:grid-cols-3
            lg:overflow-visible
            pb-4
            mt-20
          "
        >

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                snap-center
                flex-shrink-0
                w-[90vw]
                sm:w-[420px]
                lg:w-auto
              "
            >
              <ProjectCard {...project} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}