import SkillCard from "./SkillCard";

function Card({ sk }) {
  const { category, skills } = sk;
  return (
    <div className="border flex flex-col my-9 w-[21rem] rounded-lg justify-center items-center">
      <h2 className="text-2xl font-semibold my-2">{category}</h2>
      <div className="flex flex-wrap border p-2 m-3 gap-1 justify-center items-center">
        {skills.map((skill) => {
          return <SkillCard skill={skill} key={skill.title} />;
        })}
      </div>
    </div>
  );
}

export default Card;
