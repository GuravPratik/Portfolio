function ProjectStack({ techStack }) {
  return (
    <div className="self-start flex gap-2 flex-wrap">
      {techStack.map((t) => {
        return (
          <h5
            className="px-2 text-sm bg-custom-purple rounded-xl p-[0.35rem] text-custom-purple2 font-medium"
            key={t}
          >
            {t}
          </h5>
        );
      })}
    </div>
  );
}

// TODO 1 use description only 100 words

function ProjectCard({ project }) {
  const { title, link, techStack, description, img } = project;

  return (
    <div
      style={{ height: "490px" }}
      className="transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-400/25  border border-indigo-600 shadow-lg shadow-indigo-500/30 rounded-lg m-3 flex flex-col justify-center items-center w-72 gap-2 p-3"
    >
      <img className="w-full h-52 mb-1 rounded-lg" src={img} />
      <ProjectStack techStack={techStack} />
      <h1 className="self-start text-lg font-semibold text-gray-300 px-2">
        {title}
      </h1>
      <p className="text-md text-zinc-500  px-2 font-normal w-fit">
        {description.slice(0, 125)}
      </p>
      <a
        href={link}
        target="_blank"
        className="p-2 self-start my-2 mx-2 text-cyan-50 border rounded-lg bg-custom-back"
      >
        View Code
      </a>
      {/* link to project code */}
    </div>
  );
}

export default ProjectCard;
