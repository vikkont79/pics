import { useGame } from "../../../hooks/use-game";
import { CardsList } from "../../blocks/cards-list/cards-list";
import { Header } from "../../blocks/header/header";
import { Modal } from "../../blocks/modal/modal";

function GamePage({ words = [], onShowResults, playerName }) {
  const {
        finishedItems,
        //handleReset,
        checkItems,
        errorsCount,
        isGameOver,
        isWin
      } = useGame(words);

  const modalClassName = isWin ? '' : 'modal-box-lose';
  const modalCaption = isWin ? 'Победа' : 'Поражение';
  const modalDescription = `${playerName}, вы нашли ${finishedItems.length / 2} слова`;

  const handleResultsClick = () => {
    onShowResults(finishedItems.length / 2);
  }

  return (
    <section className="game">
      <Header value={finishedItems.length} max={words.length} errorsCount={errorsCount} />
      <CardsList words={words} finishedItems={finishedItems} checkItems={checkItems} />
      {isGameOver && (
        <Modal className={modalClassName}>
          <h3 className="modal-caption">{modalCaption}</h3>
          <p className="modal-description">{modalDescription}</p>
          <button className="button" onClick={handleResultsClick} type="button">Результаты</button>
        </Modal>
      )}
    </section>
  );
}

export { GamePage };