import Card from "./Card";

import { skill } from "../data/skillsData";

function Skills() {
  const currentYear = new Date().getFullYear() - 2021;

  return (
    <div>
      <h1>Skills</h1>
      <p>
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
