import { GAME_TYPES } from "../../../const";

function StartPage({ onStart }) {
  const handleStart = (type) => {
    onStart(type)
  }
  return (
    <section className="rules">
      <img src="img/pics-to-words.svg" width="340" height="48" alt="Pics to words" />
      <h2>Добро пожаловать!</h2>
      <h3>Правила игры</h3>
      <ul className="rules-list">
        <li>Игра предназначена для разучивания слов иностранного языка.</li>
        <li>В наборе есть пары карточек – со словом и рисунком.</li>
        <li>Нужно выбрать карточку с рисунком и подходящую ей со словом.</li>
        <li>Если карточки совпали — они становятся недоступными для выбора.</li>
      </ul>
      {GAME_TYPES.map(({ type, icon, label }) => (
        <button
          key={icon}
          onClick={() => handleStart(type)}
          className={`ico-button ico-button-${icon}`}
          type="button">
          {label}
        </button>
      ))}
    </section>
  );
}

export { StartPage };