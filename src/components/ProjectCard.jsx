function ProjectStack() {
  return (
    <>
      <h5>AWS</h5>
    </>
  );
}

function ProjectCard() {
  return (
    <div>
      <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      <ProjectStack />
      <h1>Project Name</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est
        aut at eius veritatis vitae ipsam quaerat beatae nisi quam.
      </p>
      {/* link to project code */}
    </div>
  );
}

export default ProjectCard;
