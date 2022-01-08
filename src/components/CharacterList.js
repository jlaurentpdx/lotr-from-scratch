export default function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <h3>{character.name}</h3>
          <p>Born: {character.birth}</p>
          {character.death !== 'Unknown' ? <p>Died: {character.death}</p> : null}
        </div>
      ))}
    </div>
  );
}
