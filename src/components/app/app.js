import { useState } from "react";
import { GamePage } from "../pages/game-page/game-page";
import { ResultsPage } from "../pages/results-page/results-page";
import { AppRoute } from "../../const";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function App({ words = [], results = [] }) {
  const navigate = useNavigate();  
  const [result, setResult] = useState(0);

  const showResults = (wordsCount) => {
    setResult(wordsCount);
    navigate(AppRoute.Results);
  };

  const handleReset = () => {
    navigate(AppRoute.Game);
  };
  
  return (
    <Routes> 
      <Route path="/" element={<Navigate to={AppRoute.Game} replace />} />     
      <Route
        path={AppRoute.Game}
        element={<GamePage words={words} onShowResults={showResults} />}
      />
      <Route
        path={AppRoute.Results}
        element={
          <ResultsPage 
            results={results} 
            playerResult={result} 
            onResetGame={handleReset} 
          />
        }
      />
    </Routes>
  );
}

export { App };
