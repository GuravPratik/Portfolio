import SkillCard from "./SkillCard";

function Card({ sk }) {
  const { category, skills } = sk;
  return (
    <div className="border flex flex-col mt-9 w-[21rem] min-h-[16rem] rounded-[1.2rem] border-indigo-600 items-center shadow-lg shadow-indigo-500/30">
      <h2 className="text-2xl font-semibold text-zinc-400 mt-5">{category}</h2>
      <div className="flex flex-wrap p-2 m-3 gap-1 justify-center items-center">
        {skills.map((skill) => {
          return <SkillCard skill={skill} key={skill.title} />;
        })}
      </div>
    </div>
  );
}

export default Card;
