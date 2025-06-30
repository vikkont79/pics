function App() {
  return (
    <section className="game">
          <ul className="cards">
            <li className="card">
              <span>Kannettava</span>
            </li>
            <li className="card">
              <img src="img/photo-card-5.png" width="185" height="100" alt=""/>
            </li>
            <li className="card disabled">
              <img src="img/photo-card-6.png" width="185" height="100" alt=""/>
            </li>
            <li className="card">
              <img src="img/photo-card-1.png" width="185" height="100" alt=""/>
            </li>
            <li className="card">
              <span>Vuode</span>
            </li>
            <li className="card">
              <span>Talo</span>
            </li>
            <li className="card disabled">
              <span>Koira</span>
            </li>
            <li className="card selected">
              <span>Teekannu</span>
            </li>
            <li className="card">
              <img src="img/photo-card-2.png" width="185" height="100" alt=""/>
            </li>
            <li className="card">
              <img src="img/photo-card-3.png" width="185" height="100" alt=""/>
            </li>
            <li className="card">
              <img src="img/photo-card-4.png" width="185" height="100" alt=""/>
            </li>
            <li className="card">
              <span>Kuuloke</span>
            </li>
          </ul>
        </section>
  );
}

export { App };
