import { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';
import './Films.css';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
      // console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="films-page">
      <h2>This is the films page.</h2>
    </div>
  );
}
