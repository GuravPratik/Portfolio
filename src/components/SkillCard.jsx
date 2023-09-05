function SkillCard({ skill }) {
  const { title, img } = skill;
  return (
    <div>
      <img src={img} alt={`${title}-logo`} className="w-10" />
      <h4>{title}</h4>
    </div>
  );
}

export default SkillCard;
