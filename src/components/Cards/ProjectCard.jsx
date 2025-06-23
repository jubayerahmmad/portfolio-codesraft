import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const { name, description, image, live, github, tags } = project || {};
  return (
    <div className="flex-none bg-cyan-100/10 rounded-2xl transition duration-300 w-full lg:w-1/2 xl:w-1/3">
      <div>
        <img
          src={image}
          alt="project image"
          className="rounded-t-2xl h-60 object-cover w-full"
        />
      </div>

      <div className="p-6">
        <div className="h-40">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{name}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={github} target="_blank">
            <button
              className="hover:text-cyan-500 cursor-pointer"
              title="GitHub Link"
            >
              <FaGithub size={24} />
            </button>
          </a>
          <a href={live} target="_blank">
            <button
              className="hover:text-cyan-500 cursor-pointer"
              title="Live Link"
            >
              <FaExternalLinkAlt size={24} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
