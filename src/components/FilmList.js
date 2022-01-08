export default function FilmList({ films }) {
  return (
    <div className="film-list">
      {films.map((film) => (
        <div key={film.id}>
          <h3>{film.title}</h3>
          <p>Box Office Total: ${film.box_office_total}M</p>
          <p>Nominated for {film.academy_award_nominations} Academy Awards</p>
        </div>
      ))}
    </div>
  );
}
