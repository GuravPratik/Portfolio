function ProjectStack() {
  return (
    <div className="self-start flex gap-2 flex-wrap">
      <h5 className="px-2 text-sm bg-custom-purple rounded-xl p-[0.35rem] text-custom-purple2 font-medium">
        AWS
      </h5>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="transition overflow-hidden duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-400/25  border border-indigo-600 shadow-lg shadow-indigo-500/30 rounded-lg m-3 flex flex-col justify-center items-center w-72 gap-2 p-3">
      <img
        className="w-full h-52 rounded-lg"
        src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
      />
      <ProjectStack />
      <h1 className="self-start text-lg font-semibold text-gray-300 px-2">
        Project Name
      </h1>
      <p className="text-md text-zinc-500 px-2 font-normal w-fit">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est
        aut at eius veritatis vitae ipsam quaerat beatae nisi quam.
      </p>
      <button className="px-2 self-start my-2">View Code</button>
      {/* link to project code */}
    </div>
  );
}

export default ProjectCard;
