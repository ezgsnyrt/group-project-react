import "./App.css";
import { useEffect, useState } from "react";

import TriviaData from "./components/ShowAnswer";

// Component Functional
function App() {
  // variables, each state is a variable kept in the component all the time

  // dynamic html content
  return (
    <div className="App">
      <TriviaData />
    </div>
  );
}

export default App;
