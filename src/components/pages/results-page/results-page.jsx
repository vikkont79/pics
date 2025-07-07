import { ResultsTable } from "../../blocks/results-table/results-table";

function ResultsPage({ results, playerName, playerResult, onResetGame }) {    

  return (
    <section className="result">
      <img src="img/pics-to-words.svg" width="340" height="48" alt="Pics to words" />
      <h2>Лучшие результаты</h2>
      <ResultsTable results={results} playerName={playerName} />
      <button className="button" onClick={onResetGame} type="button">Новая игра</button>
    </section>
  );
}

export { ResultsPage };