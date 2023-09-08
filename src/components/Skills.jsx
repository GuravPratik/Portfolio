import Card from "./Card";

import { skill } from "../data/skillsData";

function Skills() {
  const currentYear = new Date().getFullYear() - 2021;

  return (
    <section id="skills">
      <div className="flex flex-col justify-center items-center my-6">
        <h1 className="font-semibold text-3xl mt-1 mb-4 sm:text-4xl sm:font-bold">
          Skills
        </h1>
        <p className="text-lg text-zinc-500 text-center px-3 font-medium w-fit">
          Here are some of my skills on which I have been working on for the
          past
          {" " + currentYear} years.
        </p>
        <div className="tablet:flex tablet:flex-wrap tablet:justify-around tablet:p-5 tablet:gap-6 tablet:max-w-[85rem] tablet:mx-3">
          {skill.map((sk) => {
            return <Card sk={sk} key={sk.category} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
