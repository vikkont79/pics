import { useState } from "react";
import { Card } from "../../shared/card/card";
import { TIMEOUT } from "../../../const";

function CardsList({ words = [], finishedItems = [], checkItems }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCardClick = (id) => {
    if (selectedItems.includes(id)) {
      return;
    }
    switch (selectedItems.length) {
      case 0:      
        setSelectedItems([id]);
        break;
      case 1:
        const firstId = selectedItems[0];
        setSelectedItems((items) => [...items, id]);
        checkItems(firstId, id);
        setTimeout(() => {
          setSelectedItems([]);
        }, TIMEOUT);
        break;
      default:
        setSelectedItems([]);
    }
  };

  return (
    <ul className="cards">
      {words.map((item) => (
        <Card
          key={item.id}
          {...item}
          isSelected={selectedItems.includes(item.id)}
          isFinished={finishedItems.includes(item.id)}
          isChecking={selectedItems.length === 2}
          onCardClick={handleCardClick}
        />
      ))}
    </ul>
  );
}

export { CardsList };