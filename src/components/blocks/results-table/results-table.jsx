function ResultsTable({ results, playerResult }) {
    const sortedResults = [
    ...results,
    { name: `Ваш результат`, steps: playerResult }
  ].sort((a, b) => b.steps - a.steps);

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
            <tr key={name} className={`result-table-row ${name === `Ваш результат` ? 'active' : ''}`}>
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