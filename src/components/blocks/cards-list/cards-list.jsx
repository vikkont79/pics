import { Card } from "../../shared/card/card";

function CardsList({ words = [], selectedItems= [], finishedItems = [] }) {
  return (
    <ul className="cards">
      {words.map((item) => (
        <Card
          key={item.id}
          {...item}
          isSelected={selectedItems.includes(item.id)}
          isFinished={finishedItems.includes(item.id)}
        />
      ))}
    </ul>
  );
}

export { CardsList };