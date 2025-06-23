import ProjectCard from "../Cards/ProjectCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import projects from "../../data/projects";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentIndex);
  const itemPerSlide = window.innerWidth > 768 ? 3 : 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - itemPerSlide;
      return prev <= 0 ? 0 : prev;
    });
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemPerSlide;
      return nextIndex;
    });
  };

  return (
    <section className="w-full py-24 bg-cyan-950/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* header */}
          <div className="flex flex-col gap-4 justify-start">
            <h1 className="section-header">MY RECENT WORKS</h1>
            <h2 className="text-2xl md:text-4xl font-bold">
              Featured Projects
            </h2>
          </div>
          {/* carousel controller */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-cyan-700 cursor-pointer hover:bg-cyan-800 disabled:bg-cyan-950 disabled:cursor-not-allowed"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === projects.length}
              className="p-3 rounded-full bg-cyan-700 cursor-pointer hover:bg-cyan-800 disabled:bg-cyan-950 disabled:cursor-not-allowed"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden pt-10">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemPerSlide}%)`,
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
