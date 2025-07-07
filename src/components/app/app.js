import { useState } from "react";
import { GamePage } from "../pages/game-page/game-page";
import { ResultsPage } from "../pages/results-page/results-page";
import { AppRoute } from "../../const";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { getWords } from "../../data";
import { StartPage } from "../pages/start-page/start-page";

function App() {
  const navigate = useNavigate();
  //const [result, setResult] = useState(0);
  const [words, setWords] = useState([]);
  const [playerName, setPlayerName] = useState('');

  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem('game-results');
    return saved ? JSON.parse(saved) : [];
  });  

  const showResults = (wordsCount) => {
    const newResults = [...results, { name: playerName, steps: wordsCount}];
    setResults(newResults);
    localStorage.setItem('game-results', JSON.stringify(newResults));
    //setResult(wordsCount);
    navigate(AppRoute.Results);
  };

  const handleReset = () => {
    navigate(AppRoute.Start);
  };

  const handleStart = (type, name) => {
    setWords(getWords(type));
    setPlayerName(name);
    navigate(AppRoute.Game);
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={AppRoute.Start} replace />} />
      <Route
        path={AppRoute.Start}
        element={<StartPage onStart={handleStart} />} />
      <Route
        path={AppRoute.Game}
        element={<GamePage words={words} onShowResults={showResults} playerName={playerName} />}
      />
      <Route
        path={AppRoute.Results}
        element={
          <ResultsPage
            results={results}
            playerName={playerName}
            onResetGame={handleReset}
          />
        }
      />
    </Routes>
  );
}

export { App };
