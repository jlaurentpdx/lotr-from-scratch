export default function CharacterList({ characters }) {
  return (
    <>
      {characters.map((character) => (
        <div key={character.id} className="character">
          <h3>{character.name}</h3>
          <p>Born: {character.birth}</p>
          {character.death !== 'Unknown' ? <p>Died: {character.death}</p> : null}
        </div>
      ))}
    </>
  );
}
