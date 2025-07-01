import { useState } from "react";
import { Card } from "../../shared/card/card";

function CardsList({ words = [], finishedItems = [], checkItems }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCardClick = (id) => {
    if (selectedItems.includes(id)) {
      return;
    }
    checkItems();
    setSelectedItems((items) => [...items, id]);
  }

  return (
    <ul className="cards">
      {words.map((item) => (
        <Card
          key={item.id}
          {...item}
          isSelected={selectedItems.includes(item.id)}
          isFinished={finishedItems.includes(item.id)}
          onCardClick={handleCardClick}
        />
      ))}
    </ul>
  );
}

export { CardsList };