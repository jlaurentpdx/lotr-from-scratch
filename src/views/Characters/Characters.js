import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import './Characters.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, query);
      setCharacters(data);
    };
    fetchData();
  }, [race, query]);

  return (
    <div>
      <h2>Characters</h2>
      <input
        value={query}
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      {characters.map((character) => (
        <h3 key={character.id}>{character.name}</h3>
      ))}
    </div>
  );
}
