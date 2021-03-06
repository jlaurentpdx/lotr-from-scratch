import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import Controls from '../../components/Controls';
import CharacterList from '../../components/CharacterList';
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
      <Controls race={race} query={query} setRace={setRace} setQuery={setQuery} />
      <CharacterList characters={characters} />
    </div>
  );
}
