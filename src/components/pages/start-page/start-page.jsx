import { useState } from "react";
import { GAME_TYPES } from "../../../const";
import { Modal } from "../../blocks/modal/modal";

function StartPage({ onStart }) {
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setIsModalOpen(false);
    }
  };

  const handleStart = (type) => {
    onStart(type, name)
  }
  return (
    <section className="rules">
      {isModalOpen && (
        <Modal className="modal-name" >
          <h3 >Добро пожаловать в игру!</h3>
          <input
            className="modal-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
            autoFocus
          />
          <button
            className="button"
            onClick={handleNameSubmit}
            disabled={!name.trim()}
          >Начать
          </button>
        </Modal>
      )}
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