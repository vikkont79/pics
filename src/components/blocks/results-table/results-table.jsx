function ResultsTable({ results, playerName }) {
    const sortedResults = [...results].sort((a, b) => b.steps - a.steps);

  return (
    <table className="result-table">
        <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.map(({ name, steps }, index) => (
            <tr key={name} className={`result-table-row ${name === playerName ? 'active' : ''}`}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export { ResultsTable };