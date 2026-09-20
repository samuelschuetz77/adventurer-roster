type CharacterProps = {
  name: string;
  characterClass: string;
  level: number;
  health: number;
  title?: string;
};

export default function Character({
  name,
  characterClass,
  level,
  health,
  title,
}: CharacterProps) {
  return (
    <div className="char-card">
      <h2>{name}</h2>
      {title && <p>{title}</p>}
      <p>Class: {characterClass}</p>
      <p>Level: {level}</p>
      <p>Health: {health}</p>
    </div>
  );
}
