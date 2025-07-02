import { useState } from "react";
import { LIVES_COUNT } from "../const";

const useGame = (words) => {
    const [finishedItems, setFinishedItems] = useState([]);
  const [stepsCount, setStepsCount] = useState(0);

  const checkItems = (firstItem, secondItem) => {

    const firstCard = words.find(({ id }) => id === firstItem);
    const secondCard = words.find(({ id }) => id === secondItem);
    if (firstCard.type === secondCard.type) {
      return;
    }
    if (firstCard.token === secondCard.token) {
      setFinishedItems((items) => [...items, firstItem, secondItem]);
    }
    setStepsCount((i) => i + 1);
  };

  const handleReset = () => {
    setFinishedItems([]);
    setStepsCount(0);
  }

  const errorsCount = stepsCount - finishedItems.length / 2;
  const lives = LIVES_COUNT - errorsCount;
  const isWin = finishedItems.length === words.length
  const isGameOver = isWin || lives === 0;
  return {
    finishedItems,
    checkItems,
    handleReset,
    errorsCount,
    isWin,
    isGameOver
  };
};

export { useGame };