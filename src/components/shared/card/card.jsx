function Card({ id, type, url, word, isSelected, isFinished, onCardClick }) {
  
  const content = type === 'image'
    ? <img src={url} width="185" height="100" alt="" />
    : <span>{word}</span>;

  const className = `card ${
    isSelected ? 'selected' : ''
    } ${
    isFinished ? 'disabled' : ''
    }`;

  const handleClick = () => {
    if (isFinished) {
      return;
    }
    onCardClick(id);
  };

  return (
    <li className={className} onClick={handleClick}>
      {content}
    </li>
  );
}

export { Card };