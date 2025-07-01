function Card({ type, url, word, isSelected, isFinished }) {
  const content = type === 'image'
    ? <img src={url} width="185" height="100" alt="" />
    : <span>{word}</span>;
    
  const className = `card ${
        isSelected ? 'selected' : ''
      } ${
        isFinished ? 'disabled' : ''
      }`;

  return (
    <li className={className}>
      {content}
    </li>
  );
}

export { Card };