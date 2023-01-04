import { useState } from "react";
import Burger from "./Burger";
import "./styles.scss";

const App = () => {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-logo">kvarcev</div>
        <nav className="header-nav">
          <ul className={`header-list ${showBurger ? "show" : ""}`}>
            <li className="header-list-link">
              <a href="#">Home</a>
            </li>
            <li className="header-list-link">
              <a href="#">Stack</a>
            </li>
            <li className="header-list-link">
              <a href="#">Education</a>
            </li>
          </ul>
          <Burger opened={showBurger} change={setShowBurger} />
        </nav>
      </header>
    </>
  );
};

export default App;
