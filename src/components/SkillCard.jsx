function SkillCard({ skill }) {
  const { title, img } = skill;
  return (
    <div className="flex gap-1 border justify-center items-center m-2 text-center w-28 p-[0.5rem] rounded-xl border-slate-400">
      <img src={img} alt={`${title}-logo`} className="w-8" />
      <h4 className="font-semibold text-md text-zinc-400">{title}</h4>
    </div>
  );
}

export default SkillCard;
