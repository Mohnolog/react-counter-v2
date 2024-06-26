import { useState } from "react";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
library.add(faCalculator);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "./components/Main";

function App() {
  const [tab, setTab] = useState([]);
  const limit = 2;
  return (
    <>
      <header>
        <FontAwesomeIcon icon="fa-solid fa-calculator" color="#5c48d3" />
        <h1>React Counter</h1>
      </header>
      <button
        className="add-counter"
        onClick={() => {
          if (tab.length < limit) {
            const newTab = [...tab];
            newTab.push(<Main />);
            setTab(newTab);
          }
        }}
      >
        Add counter
      </button>
      <Main className="main" />
      {tab}
    </>
  );
}

export default App;
