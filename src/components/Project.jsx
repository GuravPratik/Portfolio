import { projects } from "../data/projects";

import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="w-full flex justify-center items-center flex-col my-7 flex-wrap gap-3 ">
      <h1 className="font-semibold text-3xl mt-1 mb-4 sm:text-4xl sm:font-bold">
        Projects
      </h1>
      <p className="text-lg text-zinc-500 text-center px-3 font-medium w-fit">
        Here are some of my projects that i have worked.
      </p>
      <div className="flex flex-col items-center gap-5 mb-5 sm:flex-row sm:justify-evenly w-full sm:w-9/12 sm:flex-wrap sm:p-1">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Project;
