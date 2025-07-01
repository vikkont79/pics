import { CardsList } from "../blocks/cards-list/cards-list";

function App({ words = [], selectedItems= [], finishedItems = [] }) {  
  return (
    <section className="game">
      <CardsList words={words} selectedItems={selectedItems} finishedItems={finishedItems} />      
    </section>
  );
}

export { App };
