import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  images,
  tech,
  github,
  demo,
}: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col h-full">

      <Link to={`/project/${title.toLowerCase()}`}>

        <div className="relative bg-gray-100 flex justify-center items-center h-52 sm:h-64 lg:h-[340px]">

          <img
            src={images[0]}
            alt={title}
            className="h-full object-contain"
          />

        </div>

      </Link>

      <div className="p-5 lg:p-6 flex flex-col flex-1">

        <h2 className="text-2xl lg:text-3xl font-bold">

          {title}

        </h2>

        <p className="mt-4 text-base lg:text-lg text-gray-600 leading-7 min-h-[72px]">

          {description}

        </p>

        <div className="flex flex-wrap gap-2 mt-4">

          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="flex flex-wrap gap-4 mt-auto pt-5">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ExternalLink size={18} />
            Demo
          </a>

        </div>

      </div>

    </div>
  );
}
