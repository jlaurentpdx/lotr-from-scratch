export default function FilmList({ title, box_office_total, academy_award_nominations }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Box Office Total: ${box_office_total}M</p>
      <p>Academy Award Nominations: {academy_award_nominations}</p>
    </div>
  );
}
