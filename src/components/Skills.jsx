import Card from "./Card";

import { skill } from "../data/skillsData";

function Skills() {
  const currentYear = new Date().getFullYear() - 2021;

  return (
    <div className="flex flex-col justify-center items-center my-6">
      <h1 className="font-semibold text-3xl mb-4">Skills</h1>
      <p className="text-lg text-zinc-500 text-center px-3 font-medium w-fit">
        Here are some of my skills on which I have been working on for the past
        {" " + currentYear} years.
      </p>
      {skill.map((sk) => {
        return <Card sk={sk} key={sk.category} />;
      })}
    </div>
  );
}

export default Skills;
