export default function Controls({ race, query, setRace, setQuery }) {
  return (
    <div className="controls">
      <h3>Search by...</h3>
      <label>Name: </label>
      <input
        value={query}
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <label>Race: </label>
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
    </div>
  );
}
