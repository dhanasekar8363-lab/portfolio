import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectHero from "../components/ProjectHero";
import ImageGallery from "../components/ImageGallery";

export default function ProjectDetails() {

  const { id } = useParams();

  const project = projects.find(
    p => p.title.toLowerCase() === id
  );

  if (!project) {

    return (
      <div className="min-h-screen flex justify-center items-center">

        <h1 className="text-5xl">

          Project Not Found

        </h1>

      </div>
    );

  }

  return (

    <>

      <ProjectHero
        title={project.title}
        description={project.description}
        coverImage={project.images[0]}
        tech={project.tech}
      />

      <ImageGallery
        images={project.images}
        title={project.title}
      />

    </>

  );

}