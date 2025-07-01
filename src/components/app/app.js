import { useState } from "react";
import { CardsList } from "../blocks/cards-list/cards-list";
import { Hearts } from "../blocks/hearts/hearts";

function App({ words = [] }) {
  const finishedItems = ['2'];
  const [stepsCount, setStepsCount] = useState(0);

  const checkItems = () => {
    setStepsCount((i) => i + 1);
  };

  return (
    <section className="game">
      <img src="img/pics-to-words.svg" width="112" height="16" alt="Pics to words" />
      <Hearts count={3} value={stepsCount}/>
      <CardsList words={words} finishedItems={finishedItems} checkItems={checkItems} />
    </section>
  );
}

export { App };
