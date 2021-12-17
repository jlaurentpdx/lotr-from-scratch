import { useState, useEffect } from 'react';
import FilmList from '../../components/FilmList';
import { fetchFilms } from '../../services/films';
import './Films.css';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <div className="films-page">
      <h2>Films</h2>
      {films.map((film) => (
        <FilmList key={film.id} {...film} />
      ))}
    </div>
  );
}
