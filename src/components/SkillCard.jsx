function SkillCard({ skill }) {
  const { title, img } = skill;
  return (
    <div className="flex border justify-center items-center m-4 text-center w-28 p-2 rounded-lg">
      <img src={img} alt={`${title}-logo`} className="w-8" />
      <h4>{title}</h4>
    </div>
  );
}

export default SkillCard;
