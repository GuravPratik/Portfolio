import SkillCard from "./SkillCard";

function Card({ sk }) {
  const { category, skills } = sk;
  return (
    <div>
      <h2>{category}</h2>
      {skills.map((skill) => {
        return <SkillCard skill={skill} key={skill.title} />;
      })}
    </div>
  );
}

export default Card;
