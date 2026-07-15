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

        <div className="relative mt-20">

          <div
            className="
              flex
              gap-4
              overflow-x-auto
              snap-x
              snap-mandatory
              px-4
              lg:px-0
              lg:grid
              lg:grid-cols-3
              lg:gap-8
              lg:overflow-visible
              pb-4
            "
          >

            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  snap-center
                  flex-shrink-0
                  w-[82vw]
                  sm:w-[380px]
                  lg:w-auto
                "
              >
                <ProjectCard {...project} />
              </div>
            ))}

          </div>

          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FFF5F7] to-transparent lg:hidden" />

        </div>

      </div>
    </section>
  );
}